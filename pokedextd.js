class PokedexTD {
    constructor(stat) {
        this.stat = stat;
        this.HTML = document.getElementById(stat);
    }

    notify(context) {
        this.HTML.innerText = context[stat];
    }
}