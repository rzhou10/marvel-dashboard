import { configureStore } from "@reduxjs/toolkit";
import dashboardSlice from "../reducers/dashboardSlice";

// set the store as the reducer you've set up
export default configureStore({
  reducer: {
    dashboard: dashboardSlice
  }
})