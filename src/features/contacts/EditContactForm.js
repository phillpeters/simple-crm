import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import { contactUpdated } from './contactsSlice';

export const EditContactForm = (props) => {
  const { id, accountId } = props;

  const contact = useSelector(state =>
    state.contacts.find(contact => contact.id === id)
  );

  const [name, setName] = useState(contact.name);
  const [position, setPosition] = useState(contact.position);
  const [phoneNumber, setPhoneNumber] = useState(contact.phoneNumber);

  const dispatch = useDispatch();
  
  const onNameChanged = e => setName(e.target.value);
  const onPositionChanged = e => setPosition(e.target.value);
  const onPhoneNumberChanged = e => setPhoneNumber(e.target.value);

  const onSubmit = () => {
    if (name && position && phoneNumber) {
      dispatch(
        contactUpdated({
          id: id,
          name,
          position,
          phoneNumber,
          accountId: accountId
        })
      );
    }
    props.handleClose();
  };
  
  return (
    <div>
      <Dialog open={props.open} onClose={props.handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Edit Contact</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            required
            margin="dense"
            id="contact-name"
            label="Name"
            fullWidth
            defaultValue={contact.name}
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
            defaultValue={contact.position}
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
            defaultValue={contact.phoneNumber}
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