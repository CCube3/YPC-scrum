//template for a model file

//require these two things to be able to do queries
var connection = require('../config/mysql.js');
var doQuery = require('../config/doquery_function.js');
//the doQuery function is available. it takes a string which is the query, and an optional callback function
//the callback function takes one argument, rows. it is an array returned from a successful query.
//the callback function is only called when the query is successful.
//the purpose of the callback function is to enable you to modify the results of the query.
//this is usually not necessary so 99% of the time you shouldn't need a callback at all.

var bcrypt = require("bcryptjs");

module.exports = {
  loginAttempt: function(req, res, callback){
    console.log(req.body.pw1);
    var salt = bcrypt.genSaltSync(10);
    var hashedPW = bcrypt.hashSync(req.body.pw1, salt);
    doQuery("SELECT id, email, password " + "FROM users WHERE email = ?" + req.body.email + " ?", callback);
    }
}
