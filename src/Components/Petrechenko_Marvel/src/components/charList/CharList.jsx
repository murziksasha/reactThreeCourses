import { useState, useEffect, useRef } from 'react';

import './charList.scss';

import Spinner from '../spinner/Spinner';
import ErroMessage from '../errorMessage/ErrorMessage';
import MarvelService from '../../services/MarvelService';

const CharList = (props) => {
    const [char, setChar] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [newItemLoading, setNewItemLoading] = useState(false);
    const [offset, setOffset] = useState(210);
    const [charEnded, setCharEnded] = useState(false);


    const marverService = new MarvelService();

    useEffect(()=>onRequest(),[]);

    const onRequest = (offset) => {
        onCharListLoading();
        marverService
        .getAllCharacters(offset)
        .then(onCharLoaded)
        .catch(onError)
    }

    const onCharLoaded = (newCharList) => {

        let ended = false;
        if(newCharList.length < 9) {
            ended = true;
        }

        setChar((char) => [...char, ...newCharList]);
        setLoading(false);
        setNewItemLoading(newItemLoading => false);
        setOffset(offest => offest+9);
        setCharEnded(charEnded => ended);
    }

    const onCharListLoading = () => {
        setNewItemLoading(true);
    }

    const onError = () => {
        setError(true);
        setLoading(false);
    }

    const itemRefs = useRef([]);


    const focusOnItem =(id) => {
        itemRefs.current.forEach(item => item.classList.remove('char__item_selected'));
        itemRefs[id].current.classList.add('char__item_selected');
        itemRefs[id].current.focus();
    }

    const renderItems = (arr) => {
        const items = arr.map((arr, i) => {
            const {name,  thumbnail, id} = arr;
            let string= thumbnail.lastIndexOf('.jpg') - 19 ;
            return (
                    <li key={i}
                        className="char__item"
                        onClick={()=>{
                            props.onCharSelected(id);
                            // focusOnItem(i);
                        }}
                        ref={el => itemRefs.current[i] = el}>
                        <img src={thumbnail} 
                            style={
                                thumbnail.slice(string) === 'image_not_available.jpg' ? {objectFit: 'contain'} : {objectFit: 'cover'}
                            }
                            alt={name}
                        />
                        <div className="char__name">{name}</div>
                    </li>    
            )
        })
        return (
            <ul className="char__grid">
                {items}
            </ul>
    )
}

    const items = renderItems(char);
    const errorMessage = error ? <ErroMessage/> : null;
    const loadingSpinner = loading ? <Spinner/> : null;
    const content = !(loading || error) ? items : null;

    return (
        <div className="char__list">
            
                {loadingSpinner}
                {errorMessage}
                {content}
            
            <button className="button button__main button__long"
                    onClick={() => onRequest(offset)}
                    disabled={newItemLoading}
                    style={{'display': charEnded ? 'none' : 'block'}}
                    >
                <div className="inner">load more</div>
            </button>
        </div>
    )

}



export default CharList;