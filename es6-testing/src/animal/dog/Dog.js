import Animal from '../Animal';

/**
 * Defines the dog
 * @extends {Animal}
 */
export default class Dog extends Animal{
    /**
     * Says 'Woof'
     */
    talk(){
        return `Woof`;
    }
}