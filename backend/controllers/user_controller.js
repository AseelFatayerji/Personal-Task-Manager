const User = require("../models/user_model");

const getUser = async (req, res) => {
  try {
    const users = await User.find({ email: res.params });
    return res.json(users);
  } catch (err) {
    return res.status(500).send("Internal server error");
  }
};
const editUser = (req, res) => {
  try {
    const { item, value, email } = req.params;
    connection.execute(
      "UPDATE users SET ? = ? WHERE email = ?",
      [item, value, email],
      (error, result) => {
        if (error) return res.status(500).send(error);
        return res.json({ info: result });
      }
    );
  } catch (err) {
    return res.status(500).send(err);
  }
};

module.exports = { getUser, editUser };
