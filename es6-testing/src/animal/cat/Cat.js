import Animal from '../Animal';

/**
 * Defines the cat
 * @extends {Animal}
 */
export default class Cat extends Animal{
    /**
     * Says 'Meow'
     */
    talk(){
        return `Meow`;
    }
}