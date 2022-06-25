const { Schema, model } = require("mongoose");

const AuthAdmin = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
      type: String,
      required: true
  }
},{
  versionKey: false,
  collation: "User"
});

module.exports = model('AuthModel', AuthAdmin);
