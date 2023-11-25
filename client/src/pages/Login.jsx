import React from 'react';
import { Container, Typography, TextField, Button, Link } from '@mui/material';
import logoURL from '../assets/images/trello-logo.svg'; // 替换成实际的 logo 路径
import { Link as RouterLink } from 'react-router-dom';

const LogIn = () => {
  return (
    <Container component="main" maxWidth="xs">
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img src={logoURL} alt="Trell Logo" style={{ width: '100px', height: '100px', marginBottom: '16px' }} />
        <Typography variant="h5">Log in to continue</Typography>

        <form style={{ width: '100%', marginTop: '8px' }}>
          <TextField
            label="Email"
            variant="outlined"
            margin="normal"
            fullWidth
            autoFocus
            required
          />

          <Button variant="contained" color="primary" fullWidth style={{ marginTop: '16px' }}>
            Continue
          </Button>
        </form>

        <Typography variant="body2" style={{ marginTop: '16px' }}>
          <Link component={RouterLink} to="/login" color="primary">
           Can&apos;t log in?{' '}
          </Link>
        <Link component={RouterLink} to="/signup" color="primary">
        Don&apos;t have an account?
            </Link>
        </Typography>
          
      </div>
    </Container>
  );
};

export default LogIn;
