import { createSlice } from "@reduxjs/toolkit";

const themesReducer = createSlice({
  name: "themePicker",
  initialState: { currentTheme: "darkTheme" },
  reducers: {
    addTheme(state, action) {
      console.log("action.payload", action.payload);
      state.currentTheme = action.payload;
    },
  },
});

export const { addTheme } = themesReducer.actions;

export default themesReducer.reducer;
