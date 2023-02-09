import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { id: 1, isLoggedIn: false },
  reducers: {
    login: (state) => {
      state.isLoggedIn = true;
    },
  },
});

export const {login}=authSlice.actions


export default authSlice.reducer;