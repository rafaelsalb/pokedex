const pokedex = new Pokedex();

async function search() {
    const toSearch = document.getElementById("pokemonSearch").value;
    pokedex.searchPokemon(toSearch);
}
