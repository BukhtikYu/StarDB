export default class SwapiService {

    _apiBase = 'https://swapi.dev/api';
  
    async getResource(url) {
      const res = await fetch(`${this._apiBase}${url}`);
  
      if (!res.ok) {
        throw new Error(`Could not fetch ${url}` +
          `, received ${res.status}`)
      }
      return await res.json();
    };
  
    async getAllPeople() {
      const res = await this.getResource(`/people/`);
      return res.results;
    };
  
    async getPerson(id) {
      const person = await this.getResource(`/people/${id}/`);
      return person.results;
    };
  
    async getAllPlanets() {
      const res = await this.getResource(`/planets/`);
      return res.results;
    };
    
    async getPlanet(id) {
      const planet = await this.getResource(`/planets/${id}/`);
      return planet.results;
    };
    
    async getAllStarships() {
      const res = await this.getResource(`/starships/`);
      return res.results;
    };
    
    async getStarship(id) {
      const starship = this.getResource(`/starships/${id}/`);
      return starship.results;
    };
  };
  
  
  //Проверяем получение ответа от сервера
  
  //const swapi = new SwapiService();
  
  /*swapi.getAllPeople()
       .then ((body) => {
    console.log(body);
  });*/
  
  /*swapi.getPerson(3)
       .then ((body) => {
    console.log(body);
  });*/
  
  /*swapi.getAllPlanets().then ((body) => {
    console.log(body);
  });*/
  
  /*swapi.getAllStarships().then ((body) => {
    console.log(body);
  });*/
  
  /*swapi.getStarship(1).then ((body) => {
    console.log(body);
  });*/