var mongoose = require("mongoose");

module.exports = function()
{
  var UserSchema = new mongoose.Schema(
  {
    username:  String,
    password:  String,
    email:     String,
    firstName: String,
    lastName:  String,
    roles:     [String]
  }, {collection: "user"});
  
  var User = mongoose.model("User", UserSchema);
  
  return User;  
}
