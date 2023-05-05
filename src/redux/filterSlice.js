import { createSlice } from '@reduxjs/toolkit'; // це замінює всю роботу з actionTypes, actionCreator, reducer

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilter: (state, action) => {
      return action.payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;

// Діма Берестень
