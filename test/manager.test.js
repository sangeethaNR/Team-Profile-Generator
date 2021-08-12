const Manager = require("../lib/manager")
describe("Manager details",()=>{
    describe("Initialization",()=>{

        it("should return an object containing name,id and email , officeNumber property when called with the 'new' keyword", () =>{
            const obj = new Manager('sangeetha','12','sangeetha@mail.com','12345');
            expect(obj.id).toBe('12');
            expect(obj.name).toBe('sangeetha');
            expect(obj.email).toBe('sangeetha@mail.com')
            expect(obj.officeNumber).toBe('12345')
        })    
    });
    describe("getRole function" ,() =>{

        it("should return the role Manager",() => {
            
    const obj = new Manager('sangeetha','12','sangeetha@mail.com','12345');
     expect(obj.getRole()).toBe('Manager');
    
    })
    })
});