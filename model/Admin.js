const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const adminSchema = new mongoose.Schema({
  email: String,
  phone_no:String,
  // username,hash and salt will be added by  passport local mongoose
  
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("Admin",adminSchema);
