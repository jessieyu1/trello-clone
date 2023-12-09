import List from './components/List'
import SubNavBar from './components/SubNavBar'
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import DnD from '../DnD'

const Board = () => {
  return (
    <Box  sx={{ bgcolor: 'white', height: '100vh', p: 2}} >
      <SubNavBar></SubNavBar>
      {/* <Stack direction="row" spacing={2} >
      <List></List>
      <List></List>
      <List></List>
      </Stack> */}
      <DnD></DnD>
   
    </Box>
  )
}

export default Board
