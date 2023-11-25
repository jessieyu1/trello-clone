import React from 'react';
import { Container, Typography, TextField, Button, Link as MuiLink } from '@mui/material';
import logoURL from '../assets/images/trello-logo.svg'; // 替换成实际的 logo 路径
import { Link as RouterLink } from 'react-router-dom';

const SignUpPage = () => {
  const handleSignUp = () => {
    // 在这里执行用户点击“Sign Up”按钮后的逻辑，例如提交表单或跳转页面
    alert('Sign Up clicked!'); 
  };

  return (
    <Container component="main" maxWidth="xs">
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img src={logoURL} alt="Trell Logo" style={{ width: '100px', height: '100px', marginBottom: '16px' }} />
        <Typography variant="h5">Sign up to continue</Typography>

        <form style={{ width: '100%', marginTop: '8px' }}>
          <TextField
            label="Enter your email"
            variant="outlined"
            margin="normal"
            fullWidth
            autoFocus
            required
          />

          <Typography variant="body2" style={{ marginTop: '8px', marginBottom: '8px' }}>
            By signing up, I accept the{' '}
            <MuiLink
              href="https://www.atlassian.com/legal/cloud-terms-of-service"
              target="_blank"
              rel="noopener noreferrer"
              underline="hover"
            >
              Atlassian Cloud Terms of Service
            </MuiLink>{' '}
            and acknowledge the{' '}
            <MuiLink
              href="https://www.atlassian.com/legal/privacy-policy#what-this-policy-covers"
              target="_blank"
              rel="noopener noreferrer"
              underline="hover"
            >
              Privacy Policy
            </MuiLink>
            .
          </Typography>

          <Button variant="contained" color="primary" fullWidth style={{ marginTop: '16px' }} onClick={handleSignUp}>
            Sign Up
          </Button>
        </form>

        <Typography variant="body2" style={{ marginTop: '16px' }}>
          Already have an Atlassian account?{' '}
          <MuiLink component={RouterLink} to="/login" color="primary" underline="hover">
            Log in
          </MuiLink>
        </Typography>
      </div>
    </Container>
  );
};

export default SignUpPage;
