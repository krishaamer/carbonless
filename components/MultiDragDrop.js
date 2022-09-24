import { Flex, Heading, Text, Button } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { FiPlus } from "react-icons/fi";

const MultiColumn = dynamic(() => import("./MultiColumn.js"), { ssr: false });

// fake data generator
const getItems = (count, offset = 0) =>
  Array.from({ length: count }, (v, k) => k).map((k) => ({
    id: `item-${k + offset}-${new Date().getTime()}`,
    content: `Material ${k + offset}`,
  }));

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

/**
 * Moves an item from one list to another list.
 */
const move = (source, destination, droppableSource, droppableDestination) => {
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const [removed] = sourceClone.splice(droppableSource.index, 1);

  destClone.splice(droppableDestination.index, 0, removed);

  const result = {};
  result[droppableSource.droppableId] = sourceClone;
  result[droppableDestination.droppableId] = destClone;

  return result;
};

export default function MultiDragDrop() {
  const [state, setState] = useState([
    getItems(10),
    getItems(3, 21),
    getItems(5, 26),
    getItems(7, 32),
    getItems(5, 38),
    getItems(8, 48),
  ]);

  function onDragEnd(result) {
    const { source, destination } = result;

    // dropped outside the list
    if (!destination) {
      return;
    }
    const sInd = +source.droppableId;
    const dInd = +destination.droppableId;

    if (sInd === dInd) {
      const items = reorder(state[sInd], source.index, destination.index);
      const newState = [...state];
      newState[sInd] = items;
      setState(newState);
    } else {
      const result = move(state[sInd], state[dInd], source, destination);
      const newState = [...state];
      newState[sInd] = result[sInd];
      newState[dInd] = result[dInd];

      setState(newState.filter((group) => group.length));
    }
  }

  return (
    <div style={{ display: "flex" }}>
      <DragDropContext onDragEnd={onDragEnd}>
        <Flex
          flexDir="column"
          bg="main-bg"
          minH="100vh"
          w="full"
          color="white-text"
          pb="2rem"
        >
          <Flex py="4rem" flexDir="column" align="center">
            <Heading fontSize="3xl" fontWeight={600}>
              Choose Materials
            </Heading>
            <Text fontSize="20px" fontWeight={600} color="subtle-text"></Text>
          </Flex>

          <Flex justify="center" px="4rem">
            {state.map((el, ind) => (
              <MultiColumn key={ind} el={el} ind={ind} />
            ))}
          </Flex>
        </Flex>
      </DragDropContext>
    </div>
  );
}
