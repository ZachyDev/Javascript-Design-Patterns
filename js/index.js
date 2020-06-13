// const users = {
//     name: 'Zachy',
//     age: 20
// };

// Object.defineProperty(users,'name',{ writable: false })
// users.name = 'hello'
// console.log(users.name)

const users = ['zachy','finna','doroh']
Object.defineProperty(Array.prototype,'last',{get: function() {
    return this[this.length-1]
}})
const companies = ['saf','codeln'];
console.log(users.last);
console.log(companies.last);
