const User = require("../models/user_model");

const getUser = async (res, req) => {
  try {
    const users = await User.find();
    return res.json(users);
  } catch (err) {
    return res.status(500).send(err);
  }
};
const editUser = (res, req) => {
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
