const User = require("../Model/User");

exports.googleAuth = async (req, res, next) => {
  const { name, email, photo } = req.body;
  const registeredAlready = await User.findOne({ email });
  if (registeredAlready) {
const token = await registeredAlready.generateAuthToken();
            
   res.status(200).json({ user:registeredAlready, token });
    
  } else {
    const generatepassword = Math.random().toString(36).slice(-8);
    const newUser = new User({
      name: name,
      email: email,
      password: generatepassword,
      photo: photo,
    });
    try {
      const token=await newUser.generateAuthToken();
      const savedUser = await newUser.save();
      console.log({ user: savedUser, token });
      res.status(201).json({ user: savedUser, token });
    } catch (err) {
      console.log(err);
    }
  }
};
