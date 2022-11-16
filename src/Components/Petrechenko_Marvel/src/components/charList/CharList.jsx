import { Component } from 'react';

import './charList.scss';

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

    renderItems(arr) {
        return (
            arr.map((arr) => {
                const {name,  thumbnail, id} = arr;
                let string= thumbnail.lastIndexOf('.jpg') - 19 ;
                return (
                        <li key={id}
                            className="char__item"
                            onClick={()=>this.props.onCharSelected(id)}>
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
        )
    
    
    }

    render() {
        const {char, loading, error} = this.state;
        const errorMessage = error ? <ErroMessage/> : null;
        const loadingSpinner = loading ? <Spinner/> : null;
        const content = !(loading || error) ? this.renderItems(char) : null;

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



export default CharList;