import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: false,
};

export const authSlice = createSlice({
  name: "jwtToken",
  initialState,
  reducers: {
    setAuthToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const { setAuthToken } = authSlice.actions;
export const getAuthToken = (state) => state.jwtToken.token;

export default authSlice.reducer;
