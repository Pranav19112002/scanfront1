import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import React, { useEffect, useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import Editscanning from '../Editscanning/Editscanning';
import './Viewscanning.css'; 
import axios from 'axios';

const ViewScanning = () => {
  const [selected, setSelected] = useState(null);
  const [update, setUpdate] = useState(false);
  const [scanning, setScanning] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3010/view")
      .then(response => {
        console.log(response.data);
        setScanning(response.data);
      })
      .catch(error => console.log(error));
  }, []);

  const updateValues = (value) => {
    console.log("updated", value);
    setSelected(value);
    setUpdate(true);
  };

  let result;

  if (!update) {
    result = (
      <TableContainer component={Paper} sx={{ marginTop: '20px' }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Scanning ID</TableCell>
              <TableCell>Scanning Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Update</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {scanning.map((row, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {row.sid}
                </TableCell>
                <TableCell>{row.sname}</TableCell>
                <TableCell>{row.sdescrption}</TableCell>
                <TableCell>{row.samount}</TableCell>
                <TableCell><EditIcon onClick={() => updateValues(row)} /></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  } else {
    result = <Editscanning data={selected} method='put' />;
  }

  return result;
};

export default ViewScanning;
