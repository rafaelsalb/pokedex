class PokedexTable {
    constructor() {
        this.subscribers = [];
    }

    notify(context) {
        this.subscribers.forEach(subscriber => {subscriber.notify(context); console.log(subscriber);});
    }

    subscribe(subscribers) {
        subscribers.forEach(subscriber => this.subscribers.push(subscriber));
    }
}