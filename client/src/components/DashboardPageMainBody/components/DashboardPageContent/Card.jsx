import { Draggable } from "react-beautiful-dnd";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {
  DashboardPageContentItemText,
  DashboardPageContentItemContainer,
  DashboardPageContentIconContainer,
} from "./DashboardPageContent.styles";

const Card = ({ text,color, index }) => {
  return (
    <Draggable draggableId={text} index={index}>
      {(provided) => (
        <DashboardPageContentItemContainer
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          topLineColor={color}
        >
          <DashboardPageContentItemText>{text}</DashboardPageContentItemText>
          <DashboardPageContentIconContainer>
            <EditIcon />
            <DeleteIcon />
          </DashboardPageContentIconContainer>
        </DashboardPageContentItemContainer>
      )}
    </Draggable>
  );
};

export default Card;
