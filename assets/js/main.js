const listPokemons = document.querySelector("#pokemonList");
// const loadMoreButton = document.querySelector("#loadMoreButton");
const limit = 12;
let offset = 0;
const maxRecords = 1010;

function convertPokemonToModal(pokemon) {
  return `
    <div id="pokemonModal" class="modal">
      <div class="modal-content">
        <span class="close-button">&times;</span>
        <h2 id="pokemonName">${pokemon.name} (#${pokemon.number})</h2>
        <p id="pokemonDetails">Tipo(s): ${pokemon.types.join(", ")}</p>
        <img id="pokemonImage" src="${pokemon.photo}" alt="${pokemon.name}">
      </div>
    </div>
  `;
}

function loadPokemonItens(offset, limit) {
  function convertPokemonToLi(pokemon) {
    return `
      <li class="pokemon ${pokemon.type}">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>
  
            <div class="detail">
              <ol class="types">
                 ${pokemon.types
                   .map((type) => `<li class="type">${type}</li>`)
                   .join("")}
              </ol>
  
              <img src="${pokemon.photo}" alt="${pokemon.name}">
            </div>
          </li>
    `;
  }
  pokeApi.getPokemons(offset, limit).then((pokemonList = []) => {
    listPokemons.innerHTML += pokemonList.map(convertPokemonToLi).join("");
  });
}

loadPokemonItens(offset, limit);

function handleScroll() {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

  if (scrollTop + clientHeight >= scrollHeight - 5) {
    offset += limit;
    const qtdRecordNextPage = offset + limit;

    if (qtdRecordNextPage >= maxRecords) {
      const newLimit = maxRecords - offset;
      loadPokemonItens(offset, newLimit);

      window.removeEventListener("scroll", handleScroll);
    } else {
      loadPokemonItens(offset, limit);
    }
  }
}

window.addEventListener("scroll", handleScroll);

//status Pokemon
const modal = document.getElementById("pokemonModal");
const closeButton = document.querySelector(".close-button");
const pokemonName = document.getElementById("pokemonName");
const pokemonDetails = document.getElementById("pokemonDetails");
const pokemonImage = document.getElementById("pokemonImage");
const modalContent = document.querySelector(".modal-content");
let styleType;

listPokemons.addEventListener("click", (event) => {
  const pokemonElement = event.target.closest(".pokemon");

  if (pokemonElement) {
    const pokemonId = pokemonElement
      .querySelector(".number")
      .textContent.replace("#", "");
    console.log(pokemonId);

    pokeApi.getPoke(pokemonId).then((pokemon) => {
      pokemonName.textContent = `${pokemon.name} (#${pokemon.id})`;
      pokemonDetails.textContent = `Tipo(s): ${pokemon.types
        .map((typeSlot) => typeSlot.type.name)
        .join(", ")}`;
      pokemonImage.src =
        pokemon.sprites.other["official-artwork"].front_default;

      styleType = pokemon.types[0].type.name;
      console.log(styleType);

      modalContent.classList.add(styleType);

      modal.style.display = "flex";
    });
  }
});

closeButton.addEventListener("click", () => {
  modal.style.display = "none";
  modalContent.classList.remove(styleType);
  styleType = null;
});

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
    modalContent.classList.remove(styleType);
    styleType = null;
  }
});
