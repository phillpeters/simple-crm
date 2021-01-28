import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import { accountAdded } from './accountsSlice';

export const AddAccountForm = (props) => {
  const [name, setName] = useState('');
  
  const dispatch = useDispatch();
  
  const onAccountChanged = e => setName(e.target.value);

  const onSubmit = () => {
    if (name) {
      dispatch(
        accountAdded({
          id: nanoid(),
          name
        })
      )
    }
    setName('');
    props.handleClose();
  }
  
  return (
    <div>
      <Dialog open={props.open} onClose={props.handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add Account</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            required
            margin="dense"
            id="account-name"
            label="Account Name"
            fullWidth
            onChange={onAccountChanged}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={onSubmit} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}