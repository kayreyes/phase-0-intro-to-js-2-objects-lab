// Write your solution in this file!
let employee = {
    name: "Dean",
    streetAddress: "Gallant St",
};
//returns an employee with the original key value pairs and the new key value pair
//it does not modify the original employee, but rather returns a clone with the new data
function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = {...employee};
    newEmployee[key] = value;
    return newEmployee;
}
//updates `employee` with the given `key` and `value` (it is destructive) and returns the entire updated employee
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
    
};
// deletes `key` from a clone of employee and returns the new employee (it is non-destructive)
//does not modify the original employee (it is non-destructive)
function deleteFromEmployeeByKey(employee, key, value) {
    return Object.assign({}, employee, { [key]: value });
}
//returns employee without the deleted key/value pair
//modifies the original employee
function destructivelyDeleteFromEmployeeByKey(employee, key, value) {
    delete employee[key];
    return employee;
};
