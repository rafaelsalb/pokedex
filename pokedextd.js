class PokedexTD {
    constructor(stat) {
        this.stat = stat;
        this.HTML = document.getElementById(stat);
        console.log(stat);
    }

    notify(context) {
        this.HTML.innerText = context[this.stat];
    }
}

class PokedexTDID extends PokedexTD {
    constructor() {
        super("pokemonID");
    }

    notify(context) {
        this.HTML.innerText = context.id;
    }
}

class PokedexTDNome extends PokedexTD {
    constructor() {
        super("pokemonNome");
    }

    notify(context) {
        this.HTML.innerText = context.name;
    }
}

class PokedexTDTipo1 extends PokedexTD {
    constructor() {
        super("pokemonTipo1");
    }

    notify(context) {
        this.HTML.innerText = context.types[0].type.name;
    }
}

class PokedexTDTipo2 extends PokedexTD {
    constructor() {
        super("pokemonTipo2");
    }

    notify(context) {
        this.HTML.innerText = context.types[1]?.type.name?? "N/A";
    }
}

class PokedexTDImagem extends PokedexTD {
    constructor() {
        super("pokemonImagem");
    }

    notify(context) {
        this.HTML.src = context.sprites.front_default;
    }
}

class PokedexTDHP extends PokedexTD {
    constructor() {
        super("pokemonHP");
    }

    notify(context) {
        this.HTML.innerText = context.stats[0].base_stat;
    }
}

class PokedexTDAtaque extends PokedexTD {
    constructor() {
        super("pokemonAtaque");
    }

    notify(context) {
        this.HTML.innerText = context.stats[1].base_stat;
    }
}

class PokedexTDDefesa extends PokedexTD {
    constructor() {
        super("pokemonDefesa");
    }

    notify(context) {
        this.HTML.innerText = context.stats[2].base_stat;
    }
}

class PokedexTDVelocidade extends PokedexTD {
    constructor() {
        super("pokemonVelocidade");
    }

    notify(context) {
        this.HTML.innerText = context.stats[5].base_stat;
    }
}

class PokedexTDAtaqueEspecial extends PokedexTD {
    constructor() {
        super("pokemonAtaqueEspecial");
    }

    notify(context) {
        this.HTML.innerText = context.stats[3].base_stat;
    }
}

class PokedexTDDefesaEspecial extends PokedexTD {
    constructor() {
        super("pokemonDefesaEspecial");
    }

    notify(context) {
        this.HTML.innerText = context.stats[4].base_stat;
    }
}

class PokedexTDAltura extends PokedexTD {
    constructor() {
        super("pokemonAltura");
    }

    notify(context) {
        this.HTML.innerText = context.height;
    }
}

class PokedexTDPeso extends PokedexTD {
    constructor() {
        super("pokemonPeso");
    }

    notify(context) {
        this.HTML.innerText = context.weight;
    }
}

class PokedexTDFactory {
    create(stat) {
        switch (stat) {
            case "pokemonID":
                return new PokedexTDID();
            case "pokemonNome":
                return new PokedexTDNome();
            case "pokemonTipo1":
                return new PokedexTDTipo1();
            case "pokemonTipo2":
                return new PokedexTDTipo2();
            case "pokemonImagem":
                return new PokedexTDImagem();
            case "pokemonHP":
                return new PokedexTDHP();
            case "pokemonAtaque":
                return new PokedexTDAtaque();
            case "pokemonDefesa":
                return new PokedexTDDefesa();
            case "pokemonVelocidade":
                return new PokedexTDVelocidade();
            case "pokemonAtaqueEspecial":
                return new PokedexTDAtaqueEspecial();
            case "pokemonDefesaEspecial":
                return new PokedexTDDefesaEspecial();
            case "pokemonAltura":
                return new PokedexTDAltura();
            case "pokemonPeso":
                return new PokedexTDPeso();
        }
    }
}