import { createSlice } from "@reduxjs/toolkit";

export const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState: {
    view: 'characters',
    isLoading: false,
    hasError: false,
    currentId: 0,
    selectedCharacters: []
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
    },
    setSelectedCharacters: (state, action) => {
      if (action.payload.add) {
        state.selectedCharacters = [...state.selectedCharacters, action.payload.character];
      } else {
        const temp = state.selectedCharacters.filter((x) => x.id !== action.payload.id);
        state.selectedCharacters = temp;
      }
    }
  }
})

// export all of the individual functions
export const { switchView, setIsLoading, setHasError, setCurrentId, setSelectedCharacters } = dashboardSlice.actions;

// export reducer
export default dashboardSlice.reducer