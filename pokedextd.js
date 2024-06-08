class TableDataSubscriber {
    constructor(id) {
        this.HTMLelement = document.createElement("td");
        this.HTMLelement.id = id;
    }

    update(context) {
    }

    getHTML() {
        return this.HTMLelement;
    }
}

class PokedexTDName extends TableDataSubscriber {
    update(context) {
        this.HTMLelement.innerText = context.name;
    }
}

class PokedexTDID extends TableDataSubscriber {
    update(context) {
        this.HTMLelement.innerText = context.id;
    }
}

class PokedexTDPrimaryType extends TableDataSubscriber {
    update(context) {
        this.HTMLelement.innerText = context.primaryType;
    }
}

class PokedexTDSecondaryType extends TableDataSubscriber {
    update(context) {
        this.HTMLelement.innerText = context.secondaryType;
    }
}

class PokedexTDFactory {
    createTD(category) {
        switch(category) {
            case "name":
                return new PokedexTDName("pokemonTDName");
            case "id":
                return new PokedexTDID("pokemonTDID");
            case "primaryType":
                return new PokedexTDPrimaryType("pokemonTDPrimaryType");
            case "secondaryType":
                return new PokedexTDSecondaryType("pokemonTDSecondaryType");
        }
    }
}