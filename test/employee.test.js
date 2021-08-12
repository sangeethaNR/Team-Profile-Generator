const Employee = require("../lib/employee")
describe("Employee details",()=>{
describe("Initialization",()=>{
it("should return an object containing name,id and email property when called with the 'new' keyword", () =>{
    const obj = new Employee('sangeetha','12','sangeetha@mail.com');
    expect(obj.id).toBe('12');
    expect(obj.name).toBe('sangeetha');
    expect(obj.email).toBe('sangeetha@mail.com')

})

})
describe("getName function" ,() =>{

    it("should return a name",() => {
const obj = new Employee('sangeetha','12','sangeetha@mail.com');
 expect(obj.getName()).toBe('sangeetha');

})
})
describe("getId function" ,() =>{

    it("should return a Id",() => {
const obj = new Employee('sangeetha','12','sangeetha@mail.com');
 expect(obj.getId()).toBe('12');

})
})
describe("getEmail function" ,() =>{

    it("should return a email",() => {
const obj = new Employee('sangeetha','12','sangeetha@mail.com');
 expect(obj.getEmail()).toBe('sangeetha@mail.com');

})
})
describe("getRole function" ,() =>{

    it("should return a role Employee",() => {
const obj = new Employee('sangeetha','12','sangeetha@mail.com');
 expect(obj.getRole()).toBe('Employee');

})
})
})