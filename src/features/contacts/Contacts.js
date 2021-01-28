import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { contactDeleted } from './contactsSlice';

import { Table } from '../../app/Table';
import { AddButton } from '../../app/AddButton';
import { AddContactForm } from '../contacts/AddContactForm';
import { EditContactForm } from '../contacts/EditContactForm';

const tableColumns = [
  {
    Header: "Contact",
    accessor: 'name'
  },
  {
    Header: 'Position',
    accessor: 'position'
  },
  {
    Header: 'Phone Number',
    accessor: 'phoneNumber'
  }
];

export const Contacts = (props) => {
  const contacts = useSelector(state => state.contacts);
  const data = contacts
    .filter(contact => contact.accountId === props.match.params.id);

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

  const handleClickEdit = (id) => {
  setId(id);
  setOpenEdit(true);
  };

  const handleCloseEdit = () => {
    setOpenEdit(false);
  };

  const handleClickDelete = (id) => {
    dispatch(
      contactDeleted({ id })
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
      <AddContactForm match={props.match} open={openAdd} handleClose={handleCloseAdd} />
      {id ? <EditContactForm open={openEdit} handleClose={handleCloseEdit} id={id}/> : ''}
    </section>
  );
};