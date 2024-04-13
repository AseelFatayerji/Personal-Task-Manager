import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAdd,
  faClipboardList,
  faHeader,
  faPencil,
} from "@fortawesome/free-solid-svg-icons";

import Task from "./Task";

import { DndContext } from "@dnd-kit/core";
import { SortableContext } from "@dnd-kit/sortable";

import "../styles/board.css";

function Board({ title, id, code }) {
  const [hide, SetHide] = useState("hide");
  const [content, SetContent] = useState("");
  const [task, SetTaskTitle] = useState("");
  const [tasks, SetTask] = useState([]);

  const showPop = () => {
    SetHide("");
  };
  const addTask = () => {
    const arr = tasks;
    const temp = <Task content={content} task={task} id={"draggable" + code} />;
    arr.push(temp);
    SetTask(arr);
    SetHide("hide");
  };

  return (
    <div className="task-card">
      <div className="task-header float gap-3 space-between">
        <div>
          <h3>{title}</h3>
        </div>
        <div>
            <FontAwesomeIcon icon={faAdd} onClick={showPop} className="add"/>
          <div className={"card " + hide}>
            <div className="card-header">Add Task</div>
            <div className="card-body">
              <div className="inputs float">
                <div>
                  <FontAwesomeIcon
                    icon={faHeader}
                    className="icon"
                  />
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
                  <FontAwesomeIcon icon={faPencil} className="icon"/>
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
        <DndContext>
          <ul className="list">
            <SortableContext items={tasks}>
              {tasks.map((item) => {
                return item;
              })}
            </SortableContext>
          </ul>
        </DndContext>
      </div>
    </div>
  );
}

export default Board;
