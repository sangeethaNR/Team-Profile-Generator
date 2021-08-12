const Engineer = require('../lib/engineer')
describe("Engineer details",()=>{
    describe("Initialization",()=>{

        it("should return an object containing name,id and email , officeNugithubName property when called with the 'new' keyword", () =>{
            const obj = new Engineer('sangeetha','12','sangeetha@mail.com','sangeethaNR');
            expect(obj.id).toBe('12');
            expect(obj.name).toBe('sangeetha');
            expect(obj.email).toBe('sangeetha@mail.com')
            expect(obj.githubName).toBe('sangeethaNR')
        })    
    });
    describe("getGithub function" ,() =>{

        it("should return the github username",() => {
            
    const obj = new Engineer('sangeetha','12','sangeetha@mail.com','sangeethaNR');
     expect(obj.getGithub()).toBe('sangeethaNR');
    
    })
    })
    describe("getRole function" ,() =>{

        it("should return the role Engineer",() => {
            
    const obj = new Engineer('sangeetha','12','sangeetha@mail.com','sangeethaNR');
     expect(obj.getRole()).toBe('Engineer');
    
    })
    })
});
