import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';

export const store = configureStore({

  // це об'єкт, який містить в собі всі редюсери
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});

// Діма Берестень
