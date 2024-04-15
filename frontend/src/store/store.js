import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./slices/taskSlice";


// create a store for the redux application
const store = configureStore({
    reducer: {
        text: taskReducer
    }
});

export default store;