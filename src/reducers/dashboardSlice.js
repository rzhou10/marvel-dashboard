import { createSlice } from "@reduxjs/toolkit";

export const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState: {
    view: '',
    isLoading: false,
    hasError: false,
    currentId: 0
  },
  reducers: {
    switchView: (state, action) => {
      state.view = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setHasError: (state, action) => {
      state.isLoading = action.payload;
    },
    setCurrentId: (state, action) => {
      state.currentId = action.payload;
    }
  }
})

// export all of the individual functions
export const { switchView, setIsLoading, setHasError, setCurrentId } = dashboardSlice.actions;

// export reducer
export default dashboardSlice.reducer