class Pokedex {
    constructor() {
        this.data = document.getElementById("data");
    }

    async searchPokemon(name) {
        const pokemonData = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        return await pokemonData.json();
    }

    async update(data) {
        this.data.innerText = data;
    }
}

async function init() {
    const pokedex = new Pokedex();
    const toSearch = document.getElementById("pokemonSearch").value;
    let res = await pokedex.searchPokemon(toSearch);
    const title = document.getElementById("pokemonTitle");
    const id = document.getElementById("pokemonID");
    const nome = document.getElementById("pokemonNome");
    const tipo1 = document.getElementById("pokemonTipo1");
    const tipo2 = document.getElementById("pokemonTipo2");
    const imagem = document.getElementById("pokemonImagem");
    const HP = document.getElementById("pokemonHP");
    const ataque = document.getElementById("pokemonAtaque");
    const defesa = document.getElementById("pokemonDefesa");
    const velocidade = document.getElementById("pokemonVelocidade");
    const ataqueEspecial = document.getElementById("pokemonAtaqueEspecial");
    const defesaEspecial = document.getElementById("pokemonDefesaEspecial");
    const altura = document.getElementById("pokemonAltura");
    const peso = document.getElementById("pokemonPeso");

    console.log(res);

    title.innerText = res.name.toUpperCase();
    id.innerText = res.id;
    nome.innerText = res.name;
    tipo1.innerText = res.types[0].type.name;
    tipo2.innerText = res.types[1]?.type.name?? "N/A";
    imagem.src = res.sprites.front_default;
    HP.innerText = res.stats[0].base_stat;
    ataque.innerText = res.stats[1].base_stat;
    defesa.innerText = res.stats[2].base_stat;
    velocidade.innerText = res.stats[5].base_stat;
    ataqueEspecial.innerText = res.stats[3].base_stat;
    defesaEspecial.innerText = res.stats[4].base_stat;
    altura.innerText = res.height;
    peso.innerText = res.weight;
}
