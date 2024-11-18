const pokeApi = {};

function convertPokeApiDetailToPokemon(pokeDetail) {
  const pokemon = new Pokemon();
  pokemon.name = pokeDetail.name;
  pokemon.number = pokeDetail.id;

  const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name);
  const [type] = types;

  pokemon.types = types;
  pokemon.type = type;

  pokemon.photo = pokeDetail.sprites.other["official-artwork"].front_default;

  return pokemon;
}

//
pokeApi.getPoke = function (id = 1) {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  return fetch(url)
    .then((response) => response.json())
    .then((pokemon) => {
      console.log(pokemon);
      return pokemon;
    })
    .catch((error) => {
      console.error("Erro ao buscar Pokémon:", error);
    });
};

pokeApi.getPoke();

//

pokeApi.getPokemonDetail = (pokemon) => {
  return fetch(pokemon.url)
    .then((response) => response.json())
    .then(convertPokeApiDetailToPokemon);
};

pokeApi.getPokemons = function (offset = 0, limit = 10) {
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
  return fetch(url)
    .then((response) => response.json())
    .then((bodyJson) => bodyJson.results)
    .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
    .then((detailRequests) => Promise.all(detailRequests))
    .then((pokeomonsDetails) => {
      // console.log(pokeomonsDetails);
      return pokeomonsDetails;
    })
    .catch((erro) => console.error(erro));
};
