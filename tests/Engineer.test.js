const Engineer = require("../Engineer")
describe("Engineer", () => {
    it("should create object with arguments of name, id, email, github",  () => {
        const technologist = new Engineer("tom", 1, "tomselleck@gmail.com", "magnum_pi")
        expect(technologist.name).toEqual("tom")
        expect(technologist.id).toEqual(1)
        expect(technologist.email).toEqual("tomselleck@gmail.com")
        expect(technologist.github).toEqual("magnum_pi")
        expect(technologist.getRole()).toEqual("Engineer")
    });

})