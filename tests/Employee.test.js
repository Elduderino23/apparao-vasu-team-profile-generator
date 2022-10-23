const Employee = require("../Employee")
describe("Employee", () => {
    it("should create object with arguments of name, id, email",  () => {
        const worker = new Employee("tom", 1, "tomselleck@gmail.com")
        expect(worker.name).toEqual("tom")
        expect(worker.id).toEqual(1)
        expect(worker.email).toEqual("tomselleck@gmail.com")
        expect(worker.getRole()).toEqual("Employee")
    });

})