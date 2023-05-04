import { createSlice } from "@reduxjs/toolkit";

import { IAuth } from "../../types/types";

interface IState {
  user: null | IAuth;
}

const initialState: IState = {
  user: null,
};

const authReducer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = authReducer.actions;
export default authReducer.reducer;
