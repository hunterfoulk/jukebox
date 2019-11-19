const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const playlistSchema = new Schema({
  username: {
    type: String,
    required: true,
    minlength: 3,
    unique: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    minlength: 3,
    trim: true
  }
});

userSchema.statics.findByCredentials = async (username, password) => {
  console.log(username + " " + password);
  // Search for a user by username and password.
  const user = await User.findOne({ username });
  if (!user) {
    throw new Error({ error: "Invalid login credentials" });
  }
  if (user.password !== password) {
    throw new Error({ error: "Invalid login credentials" });
  }
  return user;
};

const User = mongoose.model("User", userSchema);

module.exports = User;
