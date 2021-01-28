import React from 'react';

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

export const AddButton = (props) => {
  return (
    <Fab color="primary" aria-label="add" onClick={props.handleClickAdd}>
      <AddIcon />
    </Fab>
  );
}    
    
    