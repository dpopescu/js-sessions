import Animal from "./Animal";

let animal;

describe("Animal", ()=>{
    beforeEach(()=>{
        animal = new Animal();
    });
    
    it("should create a new animal with default name", ()=>{
        expect(animal.name).toBe('DefaultName');
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
        expect(animal.toString()).toBe('[Animal] - DefaultName, white');
    });

    it("should throw an error if talk() is not implemented", ()=>{
        expect(animal.talk).toThrowError(Error, "Not implemented");
    });
});