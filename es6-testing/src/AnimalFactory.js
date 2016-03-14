import Dog from './animal/dog/Dog';
import Cat from './animal/cat/Cat';

/**
 * Create animals
 * @example
 * const dog = AnimalFactory.getAnimal('dog');
 * const cat = AnimalFactory.getAnimal('cat');
 */
export default class AnimalFactory {
    /**
     *
     * @param {string} type - Animal type
     * @param {Array} params - Animal params
     * @returns {Animal}
     */
    static getAnimal(type, ...params) {
        switch (type) {
            case 'dog':
                return new Dog(params);
            case 'cat':
                return new Cat(params);
            default:
                throw new Error("Invalid animal type");
        }
    }
}