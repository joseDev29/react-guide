import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: null,
  reducers: {
    login: (state, action) => {
      console.log("SESSION REDUCER: ", action);

      return action.payload.session;
    },
    logout: () => {
      return null;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
