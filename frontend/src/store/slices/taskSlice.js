import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const taskSlice = createSlice({
  name: "task",
  initialState,

  reducers: {
    addTask: (state, action) => {
      return [...state, action.payload];
    },
    removeTask: (state, action) => {
      const temp = state.filter((item) => {
        if (item.title !== action.payload) {
          return item;
        }
      });
      return temp;
    },
    reorderTasks: (state, action) => {
      return action.payload;
    },
    switchBoard: (state, action) => {
      return action.payload;
    },
  },
});

export const { addTask, removeTask, reorderTasks, switchBoard } =
  taskSlice.actions;
export default taskSlice.reducer;
