export default class Animal {
    constructor(name='Default Name', color='white') {
        this._name = name;
        this._color = color;
    }

    get name() {
        return `${this._name.charAt(0).toUpperCase()}${this._name.slice(1)}`;
    }

    get color() {
        return this._color;
    }

    toString(){
        return `[${this.constructor.name}] - ${this.name}, ${this.color}`;
    }
}