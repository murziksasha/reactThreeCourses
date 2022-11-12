

export default class MarvelService {

  _apiBase = `https://gateway.marvel.com:443/v1/public/`;
  _apiKey = `apikey=60bd687c9ec5a78d88fd43ba421607b0`;

  getResource = async (url) => {
    let res = await fetch(url);

    if(!res.ok){
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }
    return await res.json();
  }

  getAllCharacters = () => {
    return this.getResource(`${this._apiBase}characters?limit=9&offset=240&${this._apiKey}`);
  }

  getCharacter = (id) => {
    return this.getResource(`${this._apiBase}characters/${id}?${this._apiKey}`);
  }


}