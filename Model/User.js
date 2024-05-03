const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Schema = mongoose.Schema;
const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  Photo: {
    type: String,
    required: true,
    default:
      "https://t4.ftcdn.net/jpg/05/89/93/27/360_F_589932782_vQAEAZhHnq1QCGu5ikwrYaQD0Mmurm0N.jpg",
  },
});
UserSchema.methods.generateAuthToken = async function () {
  try {
   const token = jwt.sign({
     userId: this._id.toString(),
     email: this.email,
   },
  process.env.SECRET_KEY,{
    expiresIn:"3d"
  }
  );
  return token
  } catch (error) {
    console.log(error)
  }
};

module.exports = mongoose.model("User", UserSchema);
