import { createSlice } from "@reduxjs/toolkit";

export const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState: {
    view: '',
    isLoading: false,
    hasError: false
  },
  reducers: {
    switchView: (state, action) => {
      state.view = action.payload
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload
    },
    setHasError: (state, action) => {
      state.isLoading = action.payload
    }
  }
})

// export all of the individual functions
export const { switchView, setIsLoading, setHasError } = dashboardSlice.actions;

// export reducer
export default dashboardSlice.reducer