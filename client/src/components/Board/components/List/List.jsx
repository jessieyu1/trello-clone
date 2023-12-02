import AddCard from "./components/AddCard";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { FixedSizeList } from "react-window";
import Title from "../Title";

function renderRow(props) {
  const { index, style } = props;

  return (
    <div>
      <ListItem style={style} key={index} component="div" disablePadding>
        <ListItemButton>
          <ListItemText primary={`Card ${index + 1}`} />
        </ListItemButton>
      </ListItem>
    </div>
  );
}
const List = () => {
  return (
    <div>
      {/* <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
    <AddCard></AddCard> */}
      <Box
        sx={{
          width: "100%",
          height: 400,
          maxWidth: 360,
          bgcolor: "background.paper",
          boxShadow: 1,
          borderRadius: 2,
          display: 'flex',
          alignItems: 'flex-start',
          flexDirection: 'column',
          p: 1,
        }}
      >
      

        <Title ></Title>
        <FixedSizeList
          height={400}
          width={360}
          itemSize={46}
          itemCount={5}
          overscanCount={5}
        >
          {renderRow}
        </FixedSizeList>
        <AddCard></AddCard>
      </Box>
    </div>
  );
};

export default List;
