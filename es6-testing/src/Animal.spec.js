import Animal from "./Animal";

let animal;

describe("Animal", ()=>{
    beforeEach(()=>{
        animal = new Animal();
    });

    it("should run", ()=>{
        expect(true).toBe(true);
    })
});