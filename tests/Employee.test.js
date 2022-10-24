// test Employee.js to make sure it functions well.
const Employee = require("../Employee")
describe("Employee", () => {
    it("should create object with arguments of name, id, email",  () => {
        const drone = new Employee("tom", 1, "tomselleck@gmail.com")
        expect(drone.name).toEqual("tom")
        expect(drone.id).toEqual(1)
        expect(drone.email).toEqual("tomselleck@gmail.com")
        expect(drone.getRole()).toEqual("Employee")
    });

})