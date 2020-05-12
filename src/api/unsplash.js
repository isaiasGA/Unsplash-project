import axios from "axios";

//this function component has the basic setting to create an axios request for unsplash api

//axios.create allows us to make customazible copy to create requests

export default axios.create({
  //domain/root url goes in the 'baseURL'
  baseURL: "https://api.unsplash.com",
  //Notice that we have 2 arguments in our request. the actual http and the "header" which contains the KEY to access the API
  headers: {
    Authorization: "Client-ID c8nNOvS7weVNrDdNCLDbheLvFFvSaTyr6xMdLYIHkzE"
  }
});
