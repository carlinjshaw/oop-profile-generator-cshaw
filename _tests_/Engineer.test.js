const Engineer = require('../lib/Engineer')

test('checks engineer class is straight', () => {

const newEngineer = new Engineer("", 0, "", "");

expect(newEngineer.name).toEqual(expect.any(String))
expect(newEngineer.id).toEqual(expect.any(Number))
expect(newEngineer.email).toEqual(expect.any(String))
expect(newEngineer.github).toEqual(expect.any(String))

})