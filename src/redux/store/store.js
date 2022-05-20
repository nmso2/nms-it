import { configureStore } from "@reduxjs/toolkit";

import servicesReducer from "../slices/servicesSlice";

export const store = configureStore({
  reducer: {
    services: servicesReducer,
  },
});
