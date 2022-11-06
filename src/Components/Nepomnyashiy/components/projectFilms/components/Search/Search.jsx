
import { Component } from "react";

import './search.scss';

export default class Search extends Component {
  state = {
    search: '',
    type: 'all',
  }

  handleKey = (e) => {
    if(e.key === 'Enter') {
      this.props.searchMovies(this.state.search, this.state.type);
    }
  }

  
  handleFilter = e => {
    this.setState(() => ({type: e.target.dataset.type}), () => {
      this.props.searchMovies(this.state.search, this.state.type);
    });
  }

  render() {
    return(
      <div className="row">
        <div className="col s12">
          <div className="input-field inline">
            <input 
            className="validate" 
            type="email" id="email_inline" 
            placeholder="search" 
            value={this.state.search}
            onChange = {(e) => this.setState({search: e.target.value})}
            onKeyDown= {this.handleKey}
            />
          <div>
            <label>
              <input type="radio" className="with-gap" name="type" data-type="all"
              onChange={this.handleFilter}
              checked={this.state.type === 'all'}/>
              <span>All</span>
            </label>
            <label>
              <input type="radio" className="with-gap" name="type" data-type="movie"
              onChange={this.handleFilter}
              checked={this.state.type === 'movie'}/>
              <span>Movies only</span>
            </label>
            <label>
              <input type="radio" className="with-gap" name="type" data-type="series"
              onChange={this.handleFilter}
              checked={this.state.type === 'series'}/>
              <span>Series Only</span>
            </label>
          </div>
            <button
            className="btn" 
            onClick={() => this.props.searchMovies(this.state.search, this.state.type)}>SEARCH</button>
          </div>
        </div>

      </div>
    )
  }
}
