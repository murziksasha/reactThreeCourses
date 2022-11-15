import { Component } from 'react';

import './charList.scss';
import abyss from '../../resources/img/abyss.jpg';

import Spinner from '../spinner/Spinner';
import ErroMessage from '../errorMessage/ErrorMessage';
import MarvelService from '../../services/MarvelService';

class CharList extends Component {

    state = {
        char: [],
        loading: true,
        error: false,
    }

    marverService = new MarvelService();

    componentDidMount(){
        this.updateChar();
    }

    onCharLoaded = (char) => {
        this.setState({char, loading: false});
    }

    updateChar = () => {
        this.setState({loading: true});
        this.marverService
        .getAllCharacters()
        .then(this.onCharLoaded)
        .catch(this.onError)
    }

    onError = () => {
        this.setState({
            loading: false,
            error: true, 
        })
    }

    render() {
        const {char, loading, error} = this.state;
        const errorMessage = error ? <ErroMessage/> : null;
        const loadingSpinner = loading ? <Spinner/> : null;
        const content = !(loading || error) ? <View char={char}/> : null;

        return (
            <div className="char__list">
                <ul className="char__grid">
                    {loadingSpinner}
                    {errorMessage}
                    {content}
                </ul>
                <button className="button button__main button__long">
                    <div className="inner">load more</div>
                </button>
            </div>
        )
    }

}

const View = ({char}) => {
    return (
        char.map((arr, i) => {
            const {name,  thumbnail} = arr;
            let string= thumbnail.lastIndexOf('.jpg') - 19 ;
            return (
                    <li key={i}
                        className="char__item">
                        <img src={thumbnail} 
                            style={
                                thumbnail.slice(string) === 'image_not_available.jpg' ? {objectFit: 'contain'} : {objectFit: 'cover'}
                            }
                            alt="character"
                        />
                        <div className="char__name">{name}</div>
                    </li>    
            )
        })
    )


}

export default CharList;