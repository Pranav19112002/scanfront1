import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import './Editscanning.css'; 
import axios from 'axios';

const Editscanning = (props) => {

    console.log(props)
    var [inputs, setInputs] = useState(props.data)



    const inputHandler = (event) => {
      const { name, value } = event.target;
      setInputs((inputs) => ({ ...inputs, [name]: value }));
      console.log(inputs);
    }
    const addHandler = () => {
      console.log("clicked")
   
        if(props.method==='put')
      axios.put("http://localhost:3010/edit/" +inputs._id,inputs)
        .then(response => {
          alert("Record updated")
          window.location.reload(false);
        })
        .catch(err => console.log(err))
    }

  return (
    <div className="form-container">
    <h1 className="form-heading">EDIT SCANNING</h1>

    <TextField className="form-field" id="outlined-basic" label="Id" name="sid" value={inputs.sid} onChange={inputHandler} variant="outlined" />
    <br /><br />
    <TextField className="form-field" id="outlined-basic" label="Scanning name" name="sname" value={inputs.sname} onChange={inputHandler} variant="outlined" />
    <br /><br />
    <textarea className="form-field" id="outlined-basic" label="Description" name="sdescription" value={inputs.sdescription} onChange={inputHandler} variant="outlined" />
    <br /><br />
    <TextField className="form-field" type='number' id='outlined-basic' label="Amount" name='samount' value={inputs.samount} onChange={inputHandler} variant='outlined' />
    <br /><br />
    <Button variant="contained" onClick={addHandler}>Edit</Button>
    </div>

  )
}

export default Editscanning