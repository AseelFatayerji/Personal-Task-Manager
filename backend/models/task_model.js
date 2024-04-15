const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  user_id: {
    type: Number,
    require: "title is required",
  },
  title: {
    type: String,
    require: "content is required",
  },
  content: String,
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
