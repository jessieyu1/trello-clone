import { Droppable } from "react-beautiful-dnd";
import Card from "./Card";
import {
  DashboardPageContentColumn,
  DashboardPageContentTitleIconContainer,
  DashboardPageContentColumnTitleContainer,
  DashBoardPageContentAddTaskContainer,
} from "./DashboardPageContent.styles";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const Column = ({ col: { list, id } }) => {
  return (
    <Droppable droppableId={id}>
      {(provided) => (
        <DashboardPageContentColumn>
          <DashboardPageContentColumnTitleContainer>
            <div>{id}</div>
            <DashboardPageContentTitleIconContainer>
              <MoreHorizIcon />
            </DashboardPageContentTitleIconContainer>
          </DashboardPageContentColumnTitleContainer>
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {list.map(({text,color}, index) => (
              <Card key={text} color={color} text={text} index={index} />
            ))}
            {provided.placeholder}
          </div>
          <DashBoardPageContentAddTaskContainer >
            + Add Task
          </DashBoardPageContentAddTaskContainer>
        </DashboardPageContentColumn>
      )}
    </Droppable>
  );
};

export default Column;
