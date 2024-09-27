import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: { lightTheme: true },
  reducers: {
    toggleTheme: (state) => {
      state.lightTheme = !state.lightTheme; // Directly update the state property
    },
  },
});

export const themeActions = themeSlice.actions;

export default themeSlice;
