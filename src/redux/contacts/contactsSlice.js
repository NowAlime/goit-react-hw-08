import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from './operations'; 
import { createSelector } from 'reselect';

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(
          (contact) => contact.id !== action.payload.id
        );
      });
  },
});

const selectContacts = (state) => state.contacts.items;
const selectNameFilter = (state) => state.filters.nameFilter;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, selectNameFilter) => {
    return contacts.filter((contact) => {
      const matchesName = contact.name.toLowerCase().includes(selectNameFilter);
      const matchesNumber = contact.number.includes(selectNameFilter);
      return matchesName || matchesNumber;
    });
  }
);

export const contactReducer = contactsSlice.reducer;
export default contactsSlice.reducer; 
