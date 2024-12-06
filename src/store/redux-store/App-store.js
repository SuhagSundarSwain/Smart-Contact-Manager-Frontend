import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./themeSlice";
import authSlice from "./authSlice";
import sidebarSlice from "./sidebarSlice";

const store = configureStore({
  reducer: {
    theme: themeSlice.reducer,
    auth: authSlice.reducer,
    sidebar: sidebarSlice.reducer,
  },
});

export default store;
