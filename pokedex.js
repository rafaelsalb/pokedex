class Pokedex {
    constructor() {
        this.pokedexTable = new PokedexTable();
        let pokedexTDFactory = new PokedexTDFactory();
        this.pokedexTable.subscribe(
            [
                pokedexTDFactory.create("pokemonID"),
                pokedexTDFactory.create("pokemonNome"),
                pokedexTDFactory.create("pokemonTipo1"),
                pokedexTDFactory.create("pokemonTipo2"),
                pokedexTDFactory.create("pokemonHP"),
                pokedexTDFactory.create("pokemonAtaque"),
                pokedexTDFactory.create("pokemonDefesa"),
                pokedexTDFactory.create("pokemonVelocidade"),
                pokedexTDFactory.create("pokemonAtaqueEspecial"),
                pokedexTDFactory.create("pokemonDefesaEspecial"),
                pokedexTDFactory.create("pokemonAltura"),
                pokedexTDFactory.create("pokemonPeso"),
                new PokedexImage()
            ]
        );
    }

    async searchPokemon(name) {
        const pokemonData = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        this.update(await pokemonData.json());
    }

    async update(data) {
        this.pokedexTable.notify(await data);
    }
}
