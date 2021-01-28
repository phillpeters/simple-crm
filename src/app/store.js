import { configureStore } from '@reduxjs/toolkit';
import accountsReducer from '../features/accounts/accountsSlice';
import contactsReducer from '../features/contacts/contactsSlice';

export default configureStore({
  reducer: {
    accounts: accountsReducer,
    contacts: contactsReducer
  }
});