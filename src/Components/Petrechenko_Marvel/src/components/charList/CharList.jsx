import { useState, useEffect, useRef } from 'react';
import useMarvelService from '../../services/MarvelService';

import './charList.scss';

import Spinner from '../spinner/Spinner';
import ErroMessage from '../errorMessage/ErrorMessage';

const CharList = (props) => {
    const [char, setChar] = useState([]);
    const [newItemLoading, setNewItemLoading] = useState(false);
    const [offset, setOffset] = useState(210);
    const [charEnded, setCharEnded] = useState(false);


    const {loading, error, getAllCharacters} = useMarvelService();

    useEffect(()=>{
        onRequest(offset, true);
    }, []);

    const onRequest = (offset, initial) => {
        initial ? setNewItemLoading(false) : setNewItemLoading(true);
        setNewItemLoading(true);
        getAllCharacters(offset)
        .then(onCharLoaded)
    }

    const onCharLoaded = (newCharList) => {

        let ended = false;
        if(newCharList.length < 9) {
            ended = true;
        }

        setChar((char) => [...char, ...newCharList]);
        setNewItemLoading(newItemLoading => false);
        setOffset(offest => offest+9);
        setCharEnded(charEnded => ended);
    }

    console.log('char list batching')

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
    const loadingSpinner = loading && !newItemLoading ? <Spinner/> : null;

    return (
        <div className="char__list">
            
                {loadingSpinner}
                {errorMessage}
                {items}
            
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