const students = {
    name: 'Zachy',
    age: 20
}
// disable property overwrite
Object.defineProperty(students,'name',{ writable: false})
students.name = 'moseti';
console.log(Object.getOwnPropertyDescriptor(students,'name'))
