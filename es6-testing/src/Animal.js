export default class Animal {
    constructor(name, color) {
        this._name = name;
        this._color = color;
    }

    get name() {
        return `${this._name.charAt(0).toUpperCase()}${this._name.slice(1)}`;
    }

    get color() {
        return this.color;
    }

    toString(){
        return `[${this.constructor.name}] - ${this.name}, ${this.color}`;
    }
}