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
        newItemLoading: false,
        offset: 1530,
        charEnded: false,

    }

    marverService = new MarvelService();

    componentDidMount(){
        this.onRequest();
    }

    onRequest = (offset) => {
        this.onCharListLoading();
        this.marverService
        .getAllCharacters(offset)
        .then(this.onCharLoaded)
        .catch(this.onError)
    }

    onCharLoaded = (newCharList) => {

        let ended = false;
        if(newCharList.length < 9) {
            ended = true;
        }


        this.setState(({offset, char})=>(
            {
                char: [...char, ...newCharList],
                loading: false,
                newItemLoading: false,
                offset: offset + 9,
                charEnded: ended,
        }));
    }

    onCharListLoading(){
        this.setState({newItemLoading: true})
    }




    onError = () => {
        this.setState({
            loading: false,
            error: true, 
        })
    }

    renderItems(arr) {

            const items = arr.map((arr, i) => {
                const {name,  thumbnail, id} = arr;
                let string= thumbnail.lastIndexOf('.jpg') - 19 ;
                return (
                        <li key={i}
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
            return (
                <ul className="char__grid">
                    {items}
                </ul>
        )
    
    
    }

    render() {
        const {char, loading, error, offset, newItemLoading, charEnded} = this.state;
        const items = this.renderItems(char);
        const errorMessage = error ? <ErroMessage/> : null;
        const loadingSpinner = loading ? <Spinner/> : null;
        const content = !(loading || error) ? items : null;

        return (
            <div className="char__list">
                
                    {loadingSpinner}
                    {errorMessage}
                    {content}
                
                <button className="button button__main button__long"
                        onClick={() => this.onRequest(offset)}
                        disabled={newItemLoading}
                        style={{'display': charEnded ? 'none' : 'block'}}
                        >
                    <div className="inner">load more</div>
                </button>
            </div>
        )
    }

}



export default CharList;