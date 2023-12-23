import {
  DashboardPageContentContainer,
  DashboardPageContentAddColumn,
} from "./DashboardPageContent.styles";
import Column from "./Column";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useState } from "react";
import dummyData from "./dummyData";
import { useDrawerStore } from "../../../../useStores/useDrawerStore";
import { DRAWER_WIDTH } from "../../../../configs/config";

function DashboardPageContent() {
  const [columns, setColumns] = useState(dummyData);
  const [columnOrder, setColumnOrder] = useState(Object.keys(dummyData)); // 初始化列顺序
  const { drawerOpen } = useDrawerStore();
  const containerStyle = {
    width: drawerOpen ? `calc(100% - ${DRAWER_WIDTH}px)` : "100%",
    marginLeft: drawerOpen ? `${DRAWER_WIDTH}px` : "0px",
  };
  const onDragEnd = ({ source, destination, type }) => {
    if (type === "column") {
      const newColumnOrder = Array.from(columnOrder);
      newColumnOrder.splice(source.index, 1);
      newColumnOrder.splice(destination.index, 0, columnOrder[source.index]);

      setColumnOrder(newColumnOrder);
      return;
    }
    // Make sure we have a valid destination
    if (destination === undefined || destination === null) return null;

    // If the source and destination columns are the same
    // AND if the index is the same, the item isn't moving
    if (
      source.droppableId === destination.droppableId &&
      destination.index === source.index
    )
      return null;

    // Set start and end variables
    const start = columns[source.droppableId];
    const end = columns[destination.droppableId];

    // If start is the same as end, we're in the same column
    if (start === end) {
      // Move the item within the list
      // Start by making a new list without the dragged item
      const newList = start.list.filter((_, idx) => idx !== source.index);

      // Then insert the item at the right location
      newList.splice(destination.index, 0, start.list[source.index]);

      // Then create a new copy of the column object
      const newCol = {
        id: start.id,
        list: newList,
      };

      // Update the state
      setColumns((state) => ({ ...state, [newCol.id]: newCol }));
      return null;
    } else {
      // If start is different from end, we need to update multiple columns
      // Filter the start list like before
      const newStartList = start.list.filter((_, idx) => idx !== source.index);

      // Create a new start column
      const newStartCol = {
        id: start.id,
        list: newStartList,
      };

      // Make a new end list array
      const newEndList = end.list;

      // Insert the item into the end list
      newEndList.splice(destination.index, 0, start.list[source.index]);

      // Create a new end column
      const newEndCol = {
        id: end.id,
        list: newEndList,
      };

      // Update the state
      setColumns((state) => ({
        ...state,
        [newStartCol.id]: newStartCol,
        [newEndCol.id]: newEndCol,
      }));
      return null;
    }
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="all-columns" direction="horizontal" type="column">
        {(provided) => (
          <DashboardPageContentContainer
            style={containerStyle}
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {columnOrder.map((columnId, index) => {
              const column = columns[columnId];
              return (
                <Draggable key={columnId} draggableId={columnId} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <Column col={column} index={index}/>
                    </div>
                  )}
                </Draggable>
              );
            })}
            {provided.placeholder}
            <DashboardPageContentAddColumn>
              <span>+ Add Columns</span>
            </DashboardPageContentAddColumn>
          </DashboardPageContentContainer>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default DashboardPageContent;
