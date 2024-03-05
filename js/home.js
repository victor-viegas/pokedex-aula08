const ul = document.querySelector('.poke-list');
const filterInput = document.querySelector('#filter');

const getPosts = async (param) => {
  const response = await
    fetch(
      `http://pokeapi.co/api/v2/pokemon?$${param}`)
  return response.json();
}