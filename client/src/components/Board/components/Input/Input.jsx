
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Input = () => {
  return (
    <Box
    component="form"
    sx={{
      '& > :not(style)': {  width: '10rem' },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'transparent',
        },
        '&:hover fieldset': {
          color: 'lightgrey',
        },
    },
    '& .MuiInputBase-input': {
        height: '0rem', 
      },
    }}
    noValidate
    autoComplete="off"
  >
    <TextField id="outlined-basic"  variant="outlined" />
  </Box>
  )
}

export default Input
