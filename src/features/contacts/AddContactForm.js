import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import { contactAdded } from './contactsSlice';

export const AddContactForm = (props) => {
  console.log(props);
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const dispatch = useDispatch();
  
  const onNameChanged = e => setName(e.target.value);
  const onPositionChanged = e => setPosition(e.target.value);
  const onPhoneNumberChanged = e => setPhoneNumber(e.target.value);

  const onSubmit = () => {
    if (name && position && phoneNumber) {
      dispatch(
        contactAdded({
          id: nanoid(),
          name,
          position,
          phoneNumber,
          accountId: props.match.params.id
        })
      )
    }
    setName('');
    setPosition('');
    setPhoneNumber('');

    props.handleClose();
  }
  
  return (
    <div>
      <Dialog open={props.open} onClose={props.handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add Contact</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            required
            margin="dense"
            id="contact-name"
            label="Name"
            fullWidth
            onChange={onNameChanged}
          />
        </DialogContent>
        <DialogContent>
          <TextField
            required
            margin="dense"
            id="position"
            label="Position"
            fullWidth
            onChange={onPositionChanged}
          />
        </DialogContent>
        <DialogContent>
          <TextField
            required
            margin="dense"
            id="phone-number"
            label="Phone Number"
            fullWidth
            onChange={onPhoneNumberChanged}
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