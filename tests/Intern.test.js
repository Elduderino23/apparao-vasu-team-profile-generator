const Intern = require("../Intern")
describe("Intern", () => {
    it("should create object with arguments of name, id, email, office_number",  () => {
        const kouhai = new Intern("tom", 1, "tomselleck@gmail.com", "USC")
        expect(kouhai.name).toEqual("tom")
        expect(kouhai.id).toEqual(1)
        expect(kouhai.email).toEqual("tomselleck@gmail.com")
        expect(kouhai.school).toEqual("USC")
        expect(kouhai.getRole()).toEqual("Manager")
    });

})