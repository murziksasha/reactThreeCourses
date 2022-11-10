import { Component } from "react";

export default class SwapiServices extends Component {
  constructor(){
    super();
    this._apiBase = `https://swapi.dev/api`;
  }

  async getResource(url){
    const res = await fetch(`${this._apiBase}${url}`);
    if(!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status} ! `);
    }
    const body = await res.json();
    return body;
  }

  async getAllPeople() {
    const res = await this.getResource(`/people/`);
    return res.results;
  }

  getAllPerson(id) {
    return this.getResource(`/people/${id}`);
  }

  async getAllPlanets() {
    const res = await this.getResource(`/planets/`);
    return res.results;
  }

  getPlanet(id) {
    return this.getResource(`/planets/${id}`);
  }

  async getAllStarships() {
    const res = await this.getResource(`/starships/`);
    return res.results;
  }

  getAllStarship(id) {
    return this.getResource(`/starships/${id}`);
  }

  render() {

    return (
      <>      
      <h3>Swapi fetch</h3>
      </>
    )
  }
}