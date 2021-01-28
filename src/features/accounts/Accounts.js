import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { accountDeleted } from './accountsSlice';
import { allContactsDeleted } from '../contacts/contactsSlice';

import { Table } from '../../app/Table';
import { AddButton } from '../../app/AddButton';
import { AddAccountForm } from './AddAccountForm';
import { EditAccountForm } from './EditAccountForm';

const tableColumns = [
  {
    Header: "Name",
    accessor: 'name'
  }
];

export const Accounts = () => {
  const data = useSelector(state => state.accounts);
  
  const dispatch = useDispatch();

  const [openAdd, setOpenAdd] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [id, setId] = useState('');

  const handleClickAdd = () => {
    setOpenAdd(true);
  };

  const handleCloseAdd = () => {
    setOpenAdd(false);
  };

  const handleClickEdit = id => {
    setId(id);
    setOpenEdit(true);
  };

  const handleCloseEdit = () => {
    setOpenEdit(false);
  };

  const handleDeleteAllContacts = id => {
    dispatch(
      allContactsDeleted({ id })
    )
  }
  
  const handleClickDelete = id => {
    handleDeleteAllContacts(id);
    dispatch(
      accountDeleted({ id })
      
    );
  };
  
  return (
    <section>
      <Table
        columns={tableColumns}
        data={data}
        handleClickEdit={handleClickEdit}
        handleClickDelete={handleClickDelete}
      />
      <AddButton handleClickAdd={handleClickAdd} />
      <AddAccountForm open={openAdd} handleClose={handleCloseAdd} />
      {id ? <EditAccountForm open={openEdit} handleClose={handleCloseEdit} id={id}/> : ''}
    </section>
  );
};