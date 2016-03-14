/**
 * Defines the animal
 * @example
 * const animal = new Animal('Name', 'color');
 */
export default class Animal {
    /**
     * Creates a new animal
     * @param {string} [name="DefaultName"] - The name
     * @param {string} [color="white"] - The color
     */
    constructor(name='DefaultName', color='white') {
        this._name = name;
        this._color = color;
    }

    /**
     * The name capitalized
     * @type {string}
     */
    get name() {
        return `${this._name.charAt(0).toUpperCase()}${this._name.slice(1)}`;
    }

    /**
     * The animal's color
     * @type {string}
     */
    get color() {
        return this._color;
    }

    /**
     * Returns useful information about the animal
     */
    toString(){
        return `[${this.constructor.name}] - ${this.name}, ${this.color}`;
    }
}