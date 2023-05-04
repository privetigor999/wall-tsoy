import { createSlice } from "@reduxjs/toolkit";

interface IState {
  currentLanguage: "ru" | "uk";
}

const initialState: IState = {
  currentLanguage: "ru",
};

const languageReducer = createSlice({
  name: "language",
  initialState,
  reducers: {
    setCurrentLanguage: (state, action) => {
      state.currentLanguage = action.payload;
    },
  },
});

export const { setCurrentLanguage } = languageReducer.actions;
export default languageReducer.reducer;
