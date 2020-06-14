// import registerUser from /scripts.js
const registerUser = require('./script');
// create an instance of the object
let user1 = new registerUser('to the system');
let user2 = new registerUser('registration of user to the company')
let user3 = new registerUser('registration of user to employeed dept');
let user4 = new registerUser('registration of user to finance dept');

user1.register();
user2.registered();
user3.registered();
user4.registered();