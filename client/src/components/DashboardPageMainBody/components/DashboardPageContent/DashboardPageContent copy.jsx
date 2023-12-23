import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  DashboardPageContentContainer,
  DashboardPageContentColumn,
  DashboardPageContentAddColumn,
  DashBoardPageContentAddTaskContainer,
  DashboardPageContentColumnTitleContainer,
  DashboardPageContentDeleteIconContainer,
} from "./DashboardPageContent.styles";
import { DRAWER_WIDTH } from "../../../../configs/config";
import { useDrawerStore } from "../../../../useStores/useDrawerStore";
import ClearIcon from "@mui/icons-material/Clear";
import { useState } from "react";

const initColumnsInfo = {
  column1: {
    id: "column1",
    name: "To Do",
    items: [
      { id: "task1", title: "Task 1" },
      { id: "task2", title: "Task 2" },
      { id: "task3", title: "Task 3" },
    ],
  },
  column2: {
    id: "column2",
    name: "In Progress",
    items: [
      { id: "task4", title: "Task 4" },
    ],
  },
};
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

function passTaskId(taskId) {
  // 在这里处理任务ID相关的逻辑
  console.log("Selected task ID: ", taskId);
}
function updateIsCreateNewCard() {
  // 在这里处理创建新卡片的逻辑
  console.log("Creating new task card");
}

function DashboardPageContent() {
  const [columnsInfo, setColumnsInfo] = useState(initColumnsInfo);
  const { drawerOpen } = useDrawerStore();
  const containerStyle = {
    width: drawerOpen ? `calc(100% - ${DRAWER_WIDTH}px)` : "100%",
    marginLeft: drawerOpen ? `${DRAWER_WIDTH}px` : "0px",
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.target.blur();
    }
  };
  function onDragEventHandler(result) {
    if (!result.destination) {
      return;
    }
  
    const sourceIndex = result.source.index;
    const destIndex = result.destination.index;
  
    // Assuming you're dragging tasks within the same column
    const column = columnsInfo[result.source.droppableId];
    const reorderedItems = reorder(column.items, sourceIndex, destIndex);
  
    // Set the new state with reordered items
    setColumnsInfo({
      ...columnsInfo,
      [result.source.droppableId]: {
        ...column,
        items: reorderedItems
      }
    });
  }
  return (
    <DashboardPageContentContainer style={containerStyle}>
      <DragDropContext onDragEnd={onDragEventHandler}>
        {Object.entries(columnsInfo).map(([id, column]) => {
          console.log("starting",id)
          return (
            <DashboardPageContentColumn key={id}>
              <Droppable droppableId={id}>
                {(provided) => (
                  <div ref={provided.innerRef} {...provided.droppableProps}>
                    <DashboardPageContentColumnTitleContainer
                      sx={{
                        "& .MuiOutlinedInput-notchedOutline": {
                          border: "none", // Remove border from the notched outline
                        },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField
                        defaultValue={column.name}
                        onKeyDown={handleKeyDown}
                        sx={{
                          flexGrow: 1,
                          marginRight: "8px",
                          "& .MuiInputBase-input": {
                            fontWeight: "bold", // Make text bold
                            color: "black",
                            fontSize: "14px",
                            padding: "4px 8px",
                            "&:hover": {
                              cursor: "pointer", // Change cursor to pointer on hover
                            },
                          },
                          "& .MuiOutlinedInput-root": {
                            "&.Mui-focused fieldset": {
                              border: "2px solid blue",
                            },
                          },
                        }}
                      />
                      <ClearIcon style={{ width: "24px", cursor: "pointer" }} />
                    </DashboardPageContentColumnTitleContainer>
                    {column.items.map(({id,title}, index) => 
                    {
                      console.log(id)
                      return(
                      <Draggable
                        key={id}
                        draggableId={id.toString()}
                        index={index}
                      >
                        {(provided) => (
                          <Box
                            ref={provided.innerRef}
                            {...provided.dragHandleProps}
                            {...provided.draggableProps}
                            aria-hidden="true"
                            onClick={() => passTaskId(id ?? "")}
                            autoComplete="off"
                            sx={{
                              cursor: "pointer",
                              backgroundColor: "white", // Set background to white on focus
                              marginBottom: "8px",
                              borderRadius: "4px",
                              position: "relative",
                              "&:hover .edit-icon": {
                                visibility: "visible",
                              },
                              "& .MuiOutlinedInput-notchedOutline": {
                                border: "none", // Remove border from the notched outline
                                shadow: "rgba(9, 30, 66, 0.25) 0px 3px 8px",
                              },
                            }}
                          >
                            <TextField
                              defaultValue={title}
                              onKeyDown={handleKeyDown}
                              sx={{
                                flexGrow: 1,
                                width: "100%",

                                "& .MuiInputBase-input": {
                                  color: "black",
                                  fontSize: "14px",
                                  padding: "8px 12px 4px",
                                  zIndex: "1",
                                  "&:hover": {
                                    cursor: "pointer", // Change cursor to pointer on hover
                                  },
                                  "&:hover .edit-icon": {
                                    visibility: "visible",
                                  },
                                },
                                "& .MuiOutlinedInput-root": {
                                  "&.Mui-focused fieldset": {
                                    border: "2px solid blue",
                                  },
                                },
                              }}
                            />
                            <DashboardPageContentDeleteIconContainer>
                              <DeleteIcon />
                            </DashboardPageContentDeleteIconContainer>
                          </Box>
                        )}
                      </Draggable>)}
                    )}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
              <DashBoardPageContentAddTaskContainer
                onClick={updateIsCreateNewCard}
                role="button"
                tabIndex={0}
              >
                + Add Task
              </DashBoardPageContentAddTaskContainer>
            </DashboardPageContentColumn>
          );
        })}
      </DragDropContext>

      <DashboardPageContentAddColumn>
        <span>+ Add Columns</span>
      </DashboardPageContentAddColumn>
    </DashboardPageContentContainer>
  );
}

export default DashboardPageContent;
