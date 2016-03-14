import Animal from "./Animal";

let animal;

describe("Animal", ()=>{
    beforeEach(()=>{
        animal = new Animal();
    });

    it("should create a new animal with default name", ()=>{
        expect(animal.name).toBe('Default Name');
    });

    it("should create a new animal with default color", ()=>{
        expect(animal.color).toBe('white');
    });

    it("should return the name capitalized", ()=>{
        animal = new Animal('test');
        expect(animal.name).toBe('Test');
    });

    it("should create a new animal with a specific color", ()=>{
        animal = new Animal('test', 'black');
        expect(animal.color).toBe('black');
    });

    it("should provide useful information when calling toString()", ()=>{
        expect(animal.toString()).toBe('[Animal] - Default Name, white');
    })
});