import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: { lightTheme: true },
  reducers: {
    toggleTheme: (state) => {
      const themeData = state.lightTheme
        ? { theme: "dark" }
        : { theme: "light" };
      state.lightTheme = !state.lightTheme; // Directly update the state property
      fetch(process.env.REACT_APP_SCM_BACKEND_SERVER + "/setTheme", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(themeData),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to update theme");
          }
          return response.json();
        })
        .then((data) => {
          // console.log("current theme: ", data.theme);
        })
        .catch((error) => {
          console.error("Error updating theme:", error);
        });
    },
    setTheme: (state, actions) => {
      if (actions.payload.theme === "light") {
        state.lightTheme = true;
      } else {
        state.lightTheme = false; // Set to false if the theme is dark
      }
    },
  },
});

export const themeActions = themeSlice.actions;

export default themeSlice;
