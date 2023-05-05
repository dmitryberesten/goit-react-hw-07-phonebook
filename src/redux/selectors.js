import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items; // масив з контактами
export const selectFilter = state => state.filter;
export const selectError = state => state.contacts.error;
export const selectIsLoading = state => state.contacts.isLoading;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter], // масив селекторів
  (contacts, filter) => {

    // для кожного контакта переводимо його ім'я в нижній регістр
    // і перевіряємо чи воно включає в себе значення фільтра
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

// Діма Берестень
