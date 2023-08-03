import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "Content-type": "application/json",
    Accept: "application/json",
  },
});

export const getCharacters = () => api.get("/character");
export const getSingleCharacter = (id) => api.get(`/character/${id}`);
export const fetchNextCharacters = (currentPage) =>
  api.get(`/character/?page=${currentPage}`);
export const getSearchedCharacter = (searchString, status, gender) => {
  
  let query = []

  if(searchString !== ""){
    query.push(`name=${searchString}`)
  }
  if(status !== ""){
    query.push(`status=${status}`)
  }
  if(gender !== ""){
    query.push(`gender=${gender}`)
  }

  // console.log(query);
  

  return api.get(`/character/?${query.join("&")}`);
};

export default api;
