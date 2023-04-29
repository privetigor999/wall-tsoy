import { createSlice } from "@reduxjs/toolkit";

import { IAuth } from "../../types/types";

interface IStateProps {
  user: null | IAuth;
}

const initialState: IStateProps = {
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
