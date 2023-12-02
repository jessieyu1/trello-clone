import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Title = () => {
    return (
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch', p: 2 },
          }}
          noValidate
          autoComplete="off"
        >
               <Typography  gutterBottom variant="h5" component="div">
            Title 1
          </Typography>
            {/* //TODO: ADD EVENT ON CLICK SO THAT THE TITLE CAN BE EDITED
          <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
        </Box>
      );
}

export default Title
