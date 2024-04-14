import { Draggable } from "react-beautiful-dnd";

function Task({ task, content, id, index }) {
  return (
    <Draggable key={id} draggableId={id} index={index}>
      {(provided) => (
        <li {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
          <div className="header">{task}</div>
          <div className="body">{content}</div>
        </li>
      )}
    </Draggable>
  );
}

export default Task;
