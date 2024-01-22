// Addscanning.jsx

import { Button, Select, TextField } from '@mui/material';
import React, { useState } from 'react';
import './Addscanning.css';
import axios from 'axios';
import Swal from 'sweetalert2';

function Addscanning() {
  const [sid, setSid] = useState(false);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [image1, setImage1] = useState('');

  async function addScanning() {
    const newScan = {
      sid,
      name,
      description,
      amount,
      image1: [image1].filter((url) => url),
      display: true, // Set display directly to true
    };

    console.log(newScan);

    try {
      const result = await axios.post('/api/scans/addscan', newScan);

      console.log(result.data);

      Swal.fire('Goodnews', 'New Scanning Added Successfully', 'success').then((result) => {
        window.location.reload();
      });
    } catch (error) {
      console.error(error);

      Swal.fire('Oops', 'Something Went Wrong', 'error');
    }
  }

  return (
    <div className="form-container1">
      <h1 className="form-heading1">ADD A SCANNING</h1>

      <TextField className="form-field1" id="outlined-basic" label="Id" name="sid" value={sid} onChange={(e) => {setSid(e.target.value);}} variant="outlined" />
      <br /><br />
      <TextField className="form-field1" id="outlined-basic" label="Scanning name" name="sname" value={name} onChange={(e) => {setName(e.target.value);}} variant="outlined" />
      <br /><br />
      <textarea className="form-field1" id="outlined-basic" label="Description" name="sdescription" value={description} onChange={(e) => {setDescription(e.target.value);}} variant="outlined" />
      <br /><br />
      <TextField className="form-field1" type='number' id='outlined-basic' label="Amount" name='samount' value={amount} onChange={(e) => {setAmount(e.target.value);}} variant='outlined' />
      <br /><br />
      <Select className="form-field1">
        <label>Choose an image to upload</label>
        <input type='file' value={image1} onChange={(e) => {setImage1(e.target.value);}} /><br /><br />
      </Select>
      <br />
      <Button className='form-button1' variant="contained" onClick={addScanning}>ADD</Button>
    </div>
  );
}

export default Addscanning;
