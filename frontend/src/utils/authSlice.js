import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
  },
  reducers: {
    loginData(state, action) {
      state.user = action.payload
    },
  },
});

export const { loginData } = authSlice.actions;

export default authSlice.reducer;
