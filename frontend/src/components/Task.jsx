import { Draggable } from "react-beautiful-dnd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import { removeTask } from "../store/slices/taskSlice";
import { useDispatch } from "react-redux";

function Task({ task, content, id, index }) {
  const dispatch = useDispatch();
  const remove_Task = () => {
    dispatch(removeTask(task));
  };
  return (
    <Draggable key={id} draggableId={id} index={index}>
      {(provided) => (
        <li
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <div className="header float space-between">
            {task}
            <FontAwesomeIcon
              icon={faTrash}
              className="alert-icon"
              onClick={remove_Task}
            />
          </div>
          <div className="body">{content}</div>
        </li>
      )}
    </Draggable>
  );
}

export default Task;
