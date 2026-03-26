const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullName: {
    firstName: {
      type: String,
      require: true,
      minlength: [3, "First name must be at least 3  characters"],
    },
    lastName: {
      type: String,
      minlength: [3, "First name must be at least 3 characters"],
    },
  },
  email: {
    type: String,
    require: true,
    unique: true,
    minlength: [5, "First name must be at least 5 characters"],
  },
  password: {
    type: String,
    require: true,
  },
  socketId: {
    type: String,
  },
});
