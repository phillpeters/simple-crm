import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import { accountUpdated } from './accountsSlice';

export const EditAccountForm = (props) => {
  const { id } = props;

  const account = useSelector(state =>
    state.accounts.find(account => account.id === id)
  );

  const [name, setName] = useState(account.name);

  const dispatch = useDispatch();
  
  const onNameChanged = e => setName(e.target.value);

  const onSubmit = () => {
    if (name) {
      dispatch(
        accountUpdated({
          id: id,
          name
        })
      );
    }
    props.handleClose();
  };
  
  return (
    <div>
      <Dialog open={props.open} onClose={props.handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Edit Account</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            required
            margin="dense"
            id="account-name"
            label="Account Name"
            fullWidth
            defaultValue={account.name}
            onChange={onNameChanged}
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