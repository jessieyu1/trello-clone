import React from 'react';
import { Grid, TextField, Button } from '@mui/material';
import '../App.css'; // 引入外部样式文件

const MainSection = () => {
  return (
    <div className="main-section-container">
      <Grid container spacing={30}>
        <Grid item xs={6}>
          {/* Left side with email input and button */}
          <div className="left-content">
            <h1>Trello brings all your tasks, teammates, and tools together</h1>
            <h4>Keep everything in the same place - even if your team isn&apos;t</h4>
            <div className="email-submit-container">
            <TextField label="Email" variant="outlined" fullWidth />
              <Button variant="contained" color="primary" style={{  padding:'15px'}}>
              Submit
            </Button>
            </div>
            </div>
        </Grid>
        <Grid item xs={6}>
          {/* Right side with small background image */}
          <div className="right-content"></div>
        </Grid>
      </Grid>
    </div>
  );
};

export default MainSection;
