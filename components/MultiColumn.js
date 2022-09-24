import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";

const grid = 6;

const titles = [
  "Foundation",
  "Columns and load-bearing vertical structures",
  "Floor slabs, ceilings",
  "Roof",
  "External walls and facade",
  "Windows",
];

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,

  // change background colour if dragging
  background: isDragging ? "lightgreen" : "grey",

  // styles we need to apply on draggables
  ...draggableStyle,
});

const getListStyle = (isDraggingOver) => ({
  background: isDraggingOver ? "lightblue" : "lightgrey",
  padding: grid,
  width: 200,
});

const Column = ({ el, ind }) => {

  return (
    <Flex
      rounded="3px"
      bg="column-bg"
      w="400px"
      h="600px"
      flexDir="column"
      position="relative"
    >
      <Text size="2xl" color={"#fff"} height="80px" backgroundColor="#222" rounded="3xl" padding="3">{titles?.at(ind)}</Text>
      <Droppable key={ind} droppableId={`${ind}`}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            style={getListStyle(snapshot.isDraggingOver)}
            {...provided.droppableProps}
          >
            {el.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={getItemStyle(
                      snapshot.isDragging,
                      provided.draggableProps.style
                    )}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-around",
                      }}
                    >
                      {item.content}
                    </div>
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </Flex>
  );
};

export default Column;
