import AnimalFactory from './AnimalFactory';

describe("AnimalFactory", ()=> {
    it("should throw an error if the animal type does not exists", ()=> {
        expect(AnimalFactory.getAnimal).toThrowError(Error, "Invalid animal type");
    });

    it("should create a new dog", ()=> {
        expect(AnimalFactory.getAnimal('dog').constructor.name).toBe("Dog");
    });

    it("should create a new cat", ()=> {
        expect(AnimalFactory.getAnimal('cat').constructor.name).toBe("Cat");
    });
});