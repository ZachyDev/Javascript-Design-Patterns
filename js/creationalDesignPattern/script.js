// create a function object
const registerUser = function(msg) {
    this.isRegistered = false;
    this.msg = msg;
}
registerUser.prototype.register = function() {
    console.log(`Registering ${ this.msg }.`)
    this.isRegistered = false;
}
registerUser.prototype.registered = function() {
    console.log(`Completing ${ this.msg }`)
}

//export regsiterUser fnction
module.exports = registerUser;