const Task = require("../models/task_model");

const setValue = (items, value) => {
  if (items === "title") {
    const temp = { title: value };
    return temp;
  }
  if (items === "content") {
    const temp = { content: value };
    return temp;
  }
};

const getTask = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  try {
    const tasks = await Task.find({ id: req.params.id });
    return res.json(tasks);
  } catch (err) {
    return res.status(500).send("Internal server error");
  }
};
const editTask = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  try {
    const id = { id: req.params.id };
    const item = setValue(req.params.item, req.params.value);
    const tasks = await Task.findOneAndUpdate(id, item, { new: true });
    return res.json(tasks);
  } catch (err) {
    return res.status(500).send(err);
  }
};
const deleteTask = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  try {
    const id = { id: req.params.id };
    const Tasks = await Task.findOneAndDelete(id, { new: true });
    return res.json(Tasks);
  } catch (err) {
    return res.status(500).send(err);
  }
};
module.exports = { getTask, editTask, deleteTask };
