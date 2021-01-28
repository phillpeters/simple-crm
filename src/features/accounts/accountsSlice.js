import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: '1', name: 'Acme Co, Inc' },
  { id: '2', name: 'The Rubber Band Company' }
];

const accountsSlice = createSlice({
  name: 'accounts',
  initialState,
  reducers: {
    accountAdded(state, action) {
      state.push(action.payload);
    },
    accountUpdated(state, action) {
      const { id, name } = action.payload;
      const existingAccount = state.find(account => account.id === id);
      if (existingAccount) {
        existingAccount.name = name;
      }
    },
    accountDeleted(state, action) {
      const { id } = action.payload;
      return state.filter(account => account.id !== id);
    }
  }
});

export const { accountAdded } = accountsSlice.actions;
export const { accountUpdated } = accountsSlice.actions;
export const { accountDeleted } = accountsSlice.actions;

export default accountsSlice.reducer;