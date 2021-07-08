const Manager = require('../lib/Manager.js')

test('checks manager class is straight', () => {

const newManager = new Manager("", 0, "", 0);

expect(newManager.name).toEqual(expect.any(String))
expect(newManager.id).toEqual(expect.any(Number))
expect(newManager.email).toEqual(expect.any(String))
expect(newManager.officeNumber).toEqual(expect.any(Number))

})