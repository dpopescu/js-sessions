import Cat from './Cat';

let cat;

describe("Cat", ()=>{
    beforeEach(()=>{
        cat = new Cat();
    });

    it("should talk", ()=>{
        expect(cat.talk()).toBe('Meow');
    })
});