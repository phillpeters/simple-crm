import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTable } from 'react-table';
import MaUTable from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

export const Table = ({ columns, data, handleClickEdit, handleClickDelete }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable({
    columns,
    data
  });
  
  const deleteIcon = id => (
    <IconButton onClick={() => handleClickDelete(id)}>
      <DeleteIcon color="secondary" />
    </IconButton>
  );

  const editIcon = id => (
    <IconButton onClick={() => handleClickEdit(id)}>
      <EditIcon color="primary" />
    </IconButton>
  )

  return (
    <MaUTable {...getTableProps()}>
      <TableHead>
        {headerGroups.map(headerGroup => (
          <TableRow {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <TableCell {...column.getHeaderProps()}>{column.render("Header")}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableHead>
      <TableBody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          const id = row.original.id;
          return (
            <TableRow {...row.getRowProps()}>
              {row.cells.map(cell => {
                return (
                  <TableCell {...cell.getCellProps()}><Link to={`/accounts/${id}`}>{cell.render("Cell")}</Link></TableCell>
                )
              })}
              <TableCell>{editIcon(id)}{deleteIcon(id)}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </MaUTable>
  );
};