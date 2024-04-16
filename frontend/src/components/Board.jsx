import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd, faHeader, faPencil } from "@fortawesome/free-solid-svg-icons";

import Task from "./Task";

import { useDispatch, useSelector } from "react-redux";
import { addTask} from "../store/slices/taskSlice";

import { Droppable } from "react-beautiful-dnd";

import "../styles/board.css";

function Board({ title, id, code }) {
  const dispatch = useDispatch();
  const task = useSelector((state) => state.text);
  const [hide, SetHide] = useState("hide");
  const [content, SetContent] = useState("");
  const [taskTitle, SetTaskTitle] = useState("");
  const [tasks, SetTask] = useState([]);

  const showPop = () => {
    SetHide("");
  };
  const add_Task = () => {
    const obj = {
      board_id: code,
      board: title,
      title: taskTitle,
      content: content,
    };
    dispatch(addTask(obj));
    set_Task();
    SetHide("hide");
  };
  const set_Task = () => {
    const arr = [];
    task.map((item, index) => {
      if (item.board_id === code) {
        const temp = (
          <Task
            content={item.content}
            task={item.title}
            id={item.title + "" + index}
            key={item.title + "" + index}
            index={index}
          />
        );
        arr.push(temp);
      }
    });
    SetTask(arr);
  };

  useEffect(() => {
    set_Task();
  }, []);

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
              <button onClick={add_Task}>Add Task</button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Droppable droppableId={`${id}`}>
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
      </div>
    </div>
  );
}

export default Board;
