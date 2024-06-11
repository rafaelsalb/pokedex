class PokedexTable {
    constructor() {
        this.subscribers = [
            new PokedexTD("pokemonID"),
            new PokedexTD("pokemonNome"),
            new PokedexTD("pokemonTipo1"),
            new PokedexTD("pokemonTipo2"),
            new PokedexTD("pokemonImagem"),
            new PokedexTD("pokemonHP"),
            new PokedexTD("pokemonAtaque"),
            new PokedexTD("pokemonDefesa"),
            new PokedexTD("pokemonVelocidade"),
            new PokedexTD("pokemonAtaqueEspecial"),
            new PokedexTD("pokemonDefesaEspecial"),
            new PokedexTD("pokemonAltura"),
            new PokedexTD("pokemonPeso")
        ];
    }
}