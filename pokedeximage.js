class PokedexImage {
    constructor() {
        this.HTML = document.getElementById("pokemonImagem");
    }

    notify(context) {
        this.HTML.src = context.sprites.front_default;
    }
}