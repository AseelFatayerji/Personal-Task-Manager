import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const taskSlice = createSlice({
  name: "task",
  initialState,

  reducers: {
    reorderTasks: (state, action) => {
      return action.payload;
    },
    addTask: (state, action) => {
      return [...state, action.payload];
    },
    removeTask: (state, action) => {
      const temp = state.task.filter((item) => {
        if (item !== action.payload) {
          return item;
        }
      });
      return temp;
    },
  },
});

export const { addTask, removeTask, reorderTasks } = taskSlice.actions;
export default taskSlice.reducer;
