import { Avatar, Button, Grid, Paper, TextField, Typography, Link } from '@mui/material';
import React, { useState } from 'react';
import MasksIcon from '@mui/icons-material/Masks';
import axios from 'axios';

function Adregister() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCpassword] = useState('');

  async function register() {
    if (password === cpassword) {
      const user = {
        name,
        email,
        password,
        cpassword,
      };

      try {
        await axios.post('/api/admin/admin', user);

        setName('');
        setEmail('');
        setPassword('');
        setCpassword('');
      } catch (error) {
        console.log(error);
      }
    } else {
      alert('Passwords do not Match');
    }
  }

  const btstyle1 = { margin: '8px 0', backgroundColor: 'green', color: 'white' };
  const paperStyle = { padding: 20, height: '70vh', width: 400, margin: '20px auto' };
  const avatar1Style = { backgroundColor: 'green' };
  const linkStyle = { color: 'green', textDecoration: 'underline', marginRight: '4px' };

  return (
    <div>
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align='center'>
            <Avatar style={avatar1Style}><MasksIcon/></Avatar>
            <h2>Sign Up</h2>
          </Grid>
          <TextField id="filled-basic" label="Name" variant="filled" value={name} onChange={(e) => setName(e.target.value)} fullWidth />
          <TextField id="filled-basic" label="Email" variant="filled" value={email} onChange={(e) => setEmail(e.target.value)} fullWidth />
          <TextField id="filled-basic" label="Password" variant="filled" type='password' value={password} onChange={(e) => setPassword(e.target.value)} fullWidth />
          <TextField id="filled-basic" label="Confirm password" variant="filled" type='password' value={cpassword} onChange={(e) => setCpassword(e.target.value)} fullWidth />
          <Button type='Submit' fullWidth variant='contained' style={btstyle1} onClick={register}>
            Signup
          </Button>

          <Typography align='left'>
            <Link href="#" style={linkStyle}>
              {'Forgot Password ?'}
            </Link>
          </Typography>
          <p align='left'>Do you have an account ?</p>
          <Typography align='left'>
            <Link to="/signin" style={linkStyle}>
              {'Sign In'}
            </Link>
          </Typography>
        </Paper>
      </Grid>
    </div>
  );
}

export default Adregister;
