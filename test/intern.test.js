const Intern = require("../lib/intern")
describe("Intern details",()=>{
    describe("Initialization",()=>{

        it("should return an object containing name,id and email , officeNumber property when called with the 'new' keyword", () =>{
            const obj = new Intern('sangeetha','12','sangeetha@mail.com','UCSD');
            expect(obj.id).toBe('12');
            expect(obj.name).toBe('sangeetha');
            expect(obj.email).toBe('sangeetha@mail.com')
            expect(obj.school).toBe('UCSD')
        })    
    });
    describe("getRole function" ,() =>{

        it("should return the role Intern",() => {
            
    const obj = new Intern('sangeetha','12','sangeetha@mail.com','UCSD');
     expect(obj.getRole()).toBe('Intern');
    
    })
    })
    describe("getSchool function" ,() =>{

        it("should return the School name",() => {
            
    const obj = new Intern('sangeetha','12','sangeetha@mail.com','UCSD');
     expect(obj.getSchool()).toBe('UCSD');
    
    })
    })
});