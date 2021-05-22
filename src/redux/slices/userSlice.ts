import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { UserStateType } from "@/types/global";

const initialState = null as UserStateType;

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
