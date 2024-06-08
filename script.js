class Pokedex {
    constructor() {
        this.data = document.getElementById("data");
    }

    async searchPokemon(name) {
        let pokemonData;
        fetch(
            `https://pokeapi.co/api/v2/pokemon/${name}`,
        )
        .then(
            (res) => {
                pokemonData = res.json();
            }
        );
        this.update(pokemonData);
    }

    async update(data) {
        this.data.innerText = data;
    }
}

class TableDataPublisher {
    constructor() {
        this.subscribers = [];
        this.HTMLelement = document.createElement("table");
    }

    notifySubscribers() {
        this.subscribers.forEach((subscriber) => subscriber.update({textContent: "abc"}));
    }

    addSubscriber(subscriber) {
        this.subscribers.push(subscriber);
    }

    getHTML() {
        return this.HTMLelement;
    }

    getChildrenHTML() {
        return this.subscribers.map((i) => i.getHTML());
    }
}

class PokedexTable {
    constructor(parent) {
        this.TDfactory = new PokedexTDFactory();
        this.publisher = new TableDataPublisher();
        this.publisher.addSubscriber(
            this.TDfactory.createTD("name")
        );
        this.publisher.addSubscriber(
            this.TDfactory.createTD("id")
        );
        this.publisher.addSubscriber(
            this.TDfactory.createTD("primaryType")
        );
        this.publisher.addSubscriber(
            this.TDfactory.createTD("secondaryType")
        );

        this.parent = parent;
    }

    buildHTML() {
        let tableRoot = this.publisher.getHTML();
        this.parent.appendChild(tableRoot);
        this.publisher.getChildrenHTML().forEach(child => tableRoot.appendChild(child));
    }
}

function init() {
    // const pokedex = new Pokedex();
    // pokedex.searchPokemon("ditto");
    const tableData = new PokedexTable(document.getElementById("root"));
    tableData.buildHTML();
}
