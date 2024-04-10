import { configureStore } from "@reduxjs/toolkit";
import Reducer from "../Reducer/Reducer";

export const store= configureStore({
    reducer: Reducer
});

//Importing the default reducer from Reducer.js file.