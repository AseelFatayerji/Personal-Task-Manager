import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const tagSlice = createSlice({
  name: "tag",
  initialState,

  reducers: {
    addTag: (state, action) => {
      return [...state, action.payload];
    },
    removeTag: (state, action) => {
      const temp = state.tag.filter((item) => {
        if (item !== action.payload) {
          return item;
        }
      });
      return temp;
    },
  },
});

export const { addtag, removetag} =
  tagSlice.actions;
export default tagSlice.reducer;
