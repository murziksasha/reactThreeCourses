import { useState, useEffect } from 'react';

import './charInfo.scss';

import MarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Skeleton from '../skeleton/Skeleton';

const CharInfo = (props)=> {
    const [char, setChar] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const marverService = new MarvelService();

    useEffect(()=>{
        updateChar();
    }, [props.charId]);

    const updateChar = () => {
        const {charId} = props;
        if(!charId){
            return;
        } else {
            setLoading(true);
        }
        onCharLoading();
        marverService.getCharacter(charId)
        .then(onCharLoaded)
        .catch(onError)
    }

    const onCharLoaded = (char) => {
        setLoading(false);
        setChar(char);
    }

    const onCharLoading = () => {
        setLoading(true);
    }

    const onError = () => {
        setLoading(false);
        setError(true);
    }


    const skeleton = char || loading || error ? null : <Skeleton/>;
    const errorMessage = error ? <ErrorMessage/> : null;
    const loadingSpinner = loading ? <Spinner/> : null;
    const content = !(loading || error || !char) ? <View char={char}/> : null;
    return (
        <div className="char__info">
            {skeleton}
            {errorMessage}
            {loadingSpinner}
            {content}
        </div>
    )
}

const View = ({char}) =>{
    const {name, description, thumbnail, homepage, wiki, comics} = char;
    const comicsTen = [...comics];
    comicsTen.length = 10;
    let string= thumbnail.lastIndexOf('.jpg') - 19 ;
    return(
        <>
            <div className="char__basics">
            <img src={thumbnail} alt={name}
                    style={
                        thumbnail.slice(string) === 'image_not_available.jpg' ? {objectFit: 'contain'} : {objectFit: 'cover'}
                    }/>
                <div>
                    <div className="char__info-name">{name}</div>
                    <div className="char__btns">
                        <a href={homepage} className="button button__main">
                            <div className="inner">homepage</div>
                        </a>
                        <a href={wiki} className="button button__secondary">
                            <div className="inner">Wiki</div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="char__descr">
                {description}
            </div>
            <div className="char__comics">Comics:</div>
            <ul className="char__comics-list">



                    {
                    comicsTen.map((item,i) => {
                        return (
                            <li key={i}
                                className="char__comics-item">
                                {item.name}
                            </li>
                        )
                    })
                    }
            </ul>
        </>
    )
}

export default CharInfo;