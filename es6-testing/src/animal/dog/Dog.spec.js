import Dog from './Dog';

let dog;

describe("Dog", ()=>{
    beforeEach(()=>{
        dog = new Dog();
    });

    it("should talk", ()=>{
        expect(dog.talk()).toBe('Woof');
    })
});