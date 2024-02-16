import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  userNameInput: "",
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    searchingUser(state, action) {
      state.users = action.payload;
    },
    updatingUserNameInput(state, action) {
      state.userNameInput = action.payload;
    },
  },
});

export const { searchingUser, updatingUserNameInput } = userSlice.actions;

export default userSlice.reducer;
