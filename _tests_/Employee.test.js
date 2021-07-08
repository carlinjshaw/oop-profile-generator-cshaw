const Employee = require('../lib/Employee')

test('checks employee class is straight', () => {

const newEmployee = new Employee("", 0, "");

expect(newEmployee.name).toEqual(expect.any(String))
expect(newEmployee.id).toEqual(expect.any(Number))
expect(newEmployee.email).toEqual(expect.any(String))

})