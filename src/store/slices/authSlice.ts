import { createSlice } from "@reduxjs/toolkit";
import { usersApi } from "../services/usersApi";

interface State {
  token: string;
}

const initialState: State = {
  token: localStorage.getItem("token") || "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem("token");
      state.token = "";
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      usersApi.endpoints.setRegister.matchFulfilled,
      (state, action) => {
        state.token = action.payload.token;
        localStorage.setItem("token", state.token);
      }
    );
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
