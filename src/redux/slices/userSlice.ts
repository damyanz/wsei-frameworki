import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

type UserType = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  picture: string;
  title: string;
} | null;

const initialState = null as UserType;

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData: (state, action) => {
      return action.payload;
    },
  },
});

export const { setUserData } = userSlice.actions;
export const getUserState = (state: RootState) => state.user;

export default userSlice.reducer;
