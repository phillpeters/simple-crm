import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: '1',
    name: 'Jimmy Hendrix',
    position: 'CEO',
    phoneNumber: '555-555-1111',
    accountId: '1'
  },
  {
    id: '2',
    name: 'Axel Rose',
    position: 'President',
    phoneNumber: '555-555-1234',
    accountId: '2'
  }
];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    contactAdded(state, action) {
      state.push(action.payload);
    },
    contactUpdated(state, action) {
      const { id, name, position, phoneNumber } = action.payload;
      const existingContact = state.find(contact => contact.id === id);
      if (existingContact) {
        existingContact.name = name;
        existingContact.position = position;
        existingContact.phoneNumber = phoneNumber;
      }
    },
    contactDeleted(state, action) {
      const { id } = action.payload;
      return state.filter(contact => contact.id !== id);
    },
    allContactsDeleted(state, action) {
      const { id } = action.payload;
      return state.filter(contact => contact.accountId !== id);
    }
  }
});

export const { contactAdded } = contactsSlice.actions;
export const { contactUpdated } = contactsSlice.actions;
export const { contactDeleted } = contactsSlice.actions;
export const { allContactsDeleted } = contactsSlice.actions;

export default contactsSlice.reducer;