import { createSlice } from "@reduxjs/toolkit";

// initial global state of the app
const initialState = {
  task: [],
};

// create a slice object
const taskSlice = createSlice({
  name: "task",
  initialState,

  // creating reducers to manipulate state
  reducers: {
    addTask: (state, action) => {
      state.task.push(action.payload);
    },
    removeTask: (state, action) => {
      state.task.filter((item) => {
        if (item !== action.payload) {
          return item;
        }
        return;
      });
    },
    getTasks: (state = initialState, action) => {
      return state.task;
    },
  },
});

// exporting actions and reducers
export const { addTask, removeTask, getTasks } = taskSlice.actions;
export default taskSlice.reducer;
