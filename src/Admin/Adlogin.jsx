import { Avatar, Button, Grid, Link, Paper, TextField, Typography } from '@mui/material';
import MasksIcon from '@mui/icons-material/Masks';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Adlogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Get the navigate function
  const navigate = useNavigate();

  async function Login() {
    const user = {
      email,
      password,
    };

    try {
      const response = await axios.post('/api/admin/signin', user);
      const result = response.data;
      localStorage.setItem('currentadmin', JSON.stringify(result));

      // Use React Router to navigate to the home page
      navigate('/panel');
    } catch (err) {
      console.error(err);
      localStorage.removeItem('currentadmin');
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
            <Avatar style={avatar1Style}><MasksIcon /></Avatar>
            <h2>Log in</h2>
          </Grid>
          <TextField id="filled-basic" label="Email" variant="filled" value={email} onChange={(e) => setEmail(e.target.value)} fullWidth />
          <TextField id="filled-basic" label="Password" variant="filled" type='password' value={password} onChange={(e) => setPassword(e.target.value)} fullWidth />
          <Button type='Submit' fullWidth variant='contained' style={btstyle1} onClick={Login}>
            Login
          </Button>

          <Typography align='left'>
            <Link href="#" style={linkStyle}>
              {'Forgot Password ?'}
            </Link>
          </Typography>
          <p align='left'>Do you have an account ?</p>
          <Typography align='left'>
            <Link href="#" style={linkStyle}>
              {'Sign up'}
            </Link>
          </Typography>
        </Paper>
      </Grid>
    </div>
  );
}

export default Adlogin;
