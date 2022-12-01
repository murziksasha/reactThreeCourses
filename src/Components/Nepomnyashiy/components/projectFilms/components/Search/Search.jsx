
import { useState } from "react";

import './search.scss';

export default function Search(props) {
  const [search, setSearch] = useState('');
  const [type, setType] = useState('all');

  const handleKey = (e) => {
    if(e.key === 'Enter') {
      props.searchMovies(search, type);
    }
  }

  
  const handleFilter = e => {
    setType(e.target.dataset.type);
    props.searchMovies(search, e.target.dataset.type);
  }

    return(
      <div className="row">
        <div className="col s12">
          <div className="input-field inline">
            <input 
            className="validate" 
            type="email" id="email_inline" 
            placeholder="search" 
            value={search}
            onChange = {(e) => setSearch(e.target.value)}
            onKeyDown= {handleKey}
            />
          <div>
            <label>
              <input type="radio" className="with-gap" name="type" data-type="all"
              onChange={handleFilter}
              checked={type === 'all'}/>
              <span>All</span>
            </label>
            <label>
              <input type="radio" className="with-gap" name="type" data-type="movie"
              onChange={handleFilter}
              checked={type === 'movie'}/>
              <span>Movies only</span>
            </label>
            <label>
              <input type="radio" className="with-gap" name="type" data-type="series"
              onChange={handleFilter}
              checked={type === 'series'}/>
              <span>Series Only</span>
            </label>
          </div>
            <button
            className="btn" 
            onClick={() => props.searchMovies(search, type)}>SEARCH</button>
          </div>
        </div>

      </div>
    )
}
