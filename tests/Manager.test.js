const Manager = require("../Manager")
describe("Manager", () => {
    it("should create object with arguments of name, id, email, office_number",  () => {
        const boss = new Manager("tom", 1, "tomselleck@gmail.com", 1)
        expect(boss.name).toEqual("tom")
        expect(boss.id).toEqual(1)
        expect(boss.email).toEqual("tomselleck@gmail.com")
        expect(boss.office_number).toEqual(1)
        expect(boss.getRole()).toEqual("Manager")
    });

})