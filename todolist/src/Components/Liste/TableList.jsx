import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from '@material-ui/icons/Edit';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const StyleTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: " #103f54",
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);


const useStyles = makeStyles({
  table: {
    minWidth: 650,
    marginTop: "30px",
  },
});


export default function TableList() {
  const classes = useStyles();

  const [list, setList] = useState([]);

  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  useEffect(() => {
    axios
      .get("http://localhost:3031/list")
      .then((response) => response.data)
      .then((data) => {
        setList(data);
  });
  }, []);

  const deleteList = (ListId) => {
    axios
      .delete(`http://localhost:3031/list/${ListId}`, {withCredentials:true})
      .then(() => {
        const newList = list.filter((list) => list.id !== ListId);
        setList(newList);
      });
  };

  const patchList = (ListId) => {
    axios
      .patch(`http://localhost:3031/list/${ListId}`, {withCredentials:true})
      .then(() => {
        const newList = list.filter((list) => list.id !== ListId);
        setList(newList);
      });
  };


  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyleTableCell align="center">Nom de la tâche</StyleTableCell>
            <StyleTableCell align="center">Fait</StyleTableCell>
            <StyleTableCell align="center">Modifier</StyleTableCell>
            <StyleTableCell align="center">Supprimer</StyleTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {list.map((row) => (
            <TableRow key={row.name}>

              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">   
              <Checkbox
                onChange={handleChange}
                className={checked ? "checked" : "notChecked"}
                inputProps={{ 'aria-label': 'primary checkbox' }}
              />
              </TableCell>
              <TableCell align="center">
              <button type="button" onclick={() => patchList(row.name)}>
                <EditIcon />
              </button>
              </TableCell>
              <TableCell align="center">
              <button type="button" onClick={() => deleteList(row.id)}>
                <DeleteIcon />
              </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}