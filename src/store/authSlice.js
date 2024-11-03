import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { authStatus: false },
  reducers: {
    setAuthStatus: (state, actions) => {
      state.authStatus = actions.payload;
    },
    setLogout: (state, actions) => {
      state.authStatus = false;
      fetch(process.env.REACT_APP_SCM_BACKEND_SERVER + "/logout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        }).catch(error=>{console.error(error)});
       
        
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
