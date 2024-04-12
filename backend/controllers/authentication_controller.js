const bcrypt = require("bcrypt");
const User = require("../models/user_model");

const Login = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  const { email, password } = req.params;
  try {
    const user = await User.findOne({ email });
    if (user) {
      if (bcrypt.compare(password, user.password)) {
        return res.json(user);
      }
      return res.status(500).send("Internal server error");
    }
    return res.status(500).send("Internal server error");
  } catch (err) {
    return res.status(500).send("Internal server error");
  }
};
const Signup = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  const { email, name, password } = req.params;
  try {
    const emailCheck = await User.findOne({ email });
    if (emailCheck) {
      console.log("exists");
      return res.send("User exists");
    }
    const hash = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      email: email,
      name: name,
      password: hash,
    });
    return res.status(201).json(newUser);
  } catch (err) {
    console.log(err);
  }
};
module.exports = { Login, Signup };
