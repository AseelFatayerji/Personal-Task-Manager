import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd, faHeader, faPencil } from "@fortawesome/free-solid-svg-icons";

import Task from "./Task";

import { DragDropContext, Droppable } from "react-beautiful-dnd";

import "../styles/board.css";

function Board({ title, id, code }) {
  const [hide, SetHide] = useState("hide");
  const [content, SetContent] = useState("");
  const [taskTitle, SetTaskTitle] = useState("");
  const [tasks, SetTask] = useState([]);

  const showPop = () => {
    SetHide("");
  };
  const addTask = () => {
    const arr = tasks;
    const temp = (
      <Task
        content={content}
        task={taskTitle}
        id={taskTitle + "" + tasks.length}
        key={taskTitle + "" + tasks.length}
        index={tasks.length}
      />
    );
    arr.push(temp);
    SetTask(arr);
    SetHide("hide");
  };

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

  const hanedleOnDragEnd = (result) => {
    const { source, destination } = result;
    // dropped outside the list
    if (!destination) {
      return;
    }
    if (source.droppableId === destination.droppableId) {
      const temp = tasks;
      const [reordered] = temp.splice(result.source.index, 1);
      temp.splice(result.destination.index, 0, reordered);
      SetTask(temp);
    }
    // else {
    //   const result = move(
    //     this.getList(source.droppableId),
    //     this.getList(destination.droppableId),
    //     source,
    //     destination
    //   );

    //   this.setState({
    //     items: result.droppable,
    //     selected: result.droppable2,
    //   });
    // }
  };
  return (
    <div className="task-card">
      <div className="task-header float gap-3 space-between">
        <div>
          <h3>{title}</h3>
        </div>
        <div>
          <FontAwesomeIcon icon={faAdd} onClick={showPop} className="add" />
          <div className={"card " + hide}>
            <div className="card-header">Add Task</div>
            <div className="card-body">
              <div className="inputs float">
                <div>
                  <FontAwesomeIcon icon={faHeader} className="icon" />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="title"
                    onChange={(e) => {
                      SetTaskTitle(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="float inputs">
                <div>
                  <FontAwesomeIcon icon={faPencil} className="icon" />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="decription"
                    onChange={(e) => {
                      SetContent(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div></div>
              <button onClick={addTask}>Add Task</button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <DragDropContext onDragEnd={hanedleOnDragEnd}>
          <Droppable droppableId={id}>
            {(provided) => (
              <ul
                className="list"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {tasks.map((item) => {
                  return item;
                })}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </div>
  );
}

export default Board;
