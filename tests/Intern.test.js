const Intern = require("../Intern")
describe("Intern", () => {
    it("should create object with arguments of name, id, email, office_number",  () => {
        const assistant = new Intern("tom", 1, "tomselleck@gmail.com", "USC")
        expect(assistant.name).toEqual("tom")
        expect(assistant.id).toEqual(1)
        expect(assistant.email).toEqual("tomselleck@gmail.com")
        expect(assistant.school).toEqual("USC")
        expect(assistant.getRole()).toEqual("Intern")
    });

})