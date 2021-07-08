const Intern = require('../lib/Intern')

test('checks employee class is straight', () => {

const newIntern = new Intern("", 0, "", "");

expect(newIntern.name).toEqual(expect.any(String))
expect(newIntern.id).toEqual(expect.any(Number))
expect(newIntern.email).toEqual(expect.any(String))
expect(newIntern.school).toEqual(expect.any(String))

})