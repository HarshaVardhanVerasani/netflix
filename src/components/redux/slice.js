import { createSlice } from "@reduxjs/toolkit";

const sessionState = {
  uid: sessionStorage.getItem("uid"),
  email: sessionStorage.getItem("email"),
};

const netflix = createSlice({
  name: "netflix",
  initialState: {
    user: sessionState,
  },
  reducers: {
    logIn: (state, action) => {
      state.user = action.payload;
      sessionStorage.setItem("uid", action.payload.uid);
      sessionStorage.setItem("email", action.payload.email);
    },
    logOut: (state, action) => {
      state.user = action.payload
    },
  },
});

export default netflix.reducer;
export const { logIn, logOut } = netflix.actions;



