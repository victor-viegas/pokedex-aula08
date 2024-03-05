const pokeContainer = document.querySelector(".container");

const colors = {
  fire: '#FDDFDF',
  grass: '#DEFDE0',
  electric: '#FCF7DE',
  water: '#DEF3FD',
  ground: '#f4e7da',
  rock: '#d5d5d4',
  fairy: '#fceaff',
  poison: '#98d7a5',
  bug: '#f8d5a3',
  dragon: '#97b3e6',
  psychic: '#eaeda1',
  flying: '#F5F5F5',
  fighting: '#E6E0D4',
  normal: '#F5F5F5'
}

const types = Object.keys(colors);
const pokeCount = 100;

const pokeFetch = async () => {
  for (let i = 1; i <= pokeCount; i++) {
    await getPosts(i);
  }
}

const getPosts = async (id) => {
  const response = await
    fetch(
      `https://pokeapi.co/api/v2/pokemon/${id}
    `);
  const data = await response.json();
  createCard(data);
}

// const createCard = (poke) => {
//   const card = document.createElement('div');
//   card.classList.add("pokemon");

//   const pokeTypes = poke.types.map(type => type.type.name);
//   const type = types.find(type => pokeTypes.indexOf(type) > -1);
//   const color = colors[type];
//   card.style.backgroundColor = color;

//   const pokemonInnerHTML = `
//     <img id="pokebola" src="./../assets/pokebola.png" alt="">
//     <span class="number">#${poke.id.toString().padStart(3, '0')}</span>
//     <div class="info">
//         <h3 class="name">${poke.name[0].toUpperCase() + poke.name.slice(1)}</h3>
//         <small class="type"><span>${type}</span></small>
//     </div>
//     <div class="image">
//         <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke.id}.png" alt="${poke.name[0] + poke.name.slice(1)}">
//     </div>
//   `
//   card.innerHTML = pokemonInnerHTML;
//   pokeContainer.appendChild(card);
// }
pokeFetch();