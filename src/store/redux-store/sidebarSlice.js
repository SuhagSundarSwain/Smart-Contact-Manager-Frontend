import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: { current_tab: null },
  reducers: {
    setTab: (state, actions) => {
      state.current_tab = actions.payload.tab;
    },
  },
});

export const sidebarActions = sidebarSlice.actions;

export default sidebarSlice;
