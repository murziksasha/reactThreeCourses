import React from 'react';
import App from './components/app/App';
import './style/style.scss';

import MarvelService from './services/MarvelService';

const marverService = new MarvelService();

marverService.getAllCharacters()
.then(res => console.log(res.data.results.forEach(item=> console.log(item.name))))

export default function Petrechenko_Marvel(){
  return(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}



