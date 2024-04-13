import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";

import Task from "./Task";

function Board({ title }) {
  const [hide, SetHide] = useState("hide");
  const [content, SetContent] = useState("");
  const [tasks, SetTask] = useState([]);

  const showPop = () => {
    SetHide("");
  };
  const addTask = () => {
    const arr = tasks;
    const temp = <Task content={content} />;
    arr.push(temp);
    SetTask(arr);
    SetHide("hide");
  };

  return (
    <div className="task">
      <div className="task-header float gap-3 space-between">
        <div>
          <label>{title}</label>
        </div>
        <div>
          <button onClick={showPop}>Add Task</button>
          <div className={"float space-even " + hide}>
            <div>
              <input
                type="text"
                placeholder="title"
                onChange={(e) => {
                  SetContent(e.target.value);
                }}
              />
            </div>
            <div></div>
            <button onClick={addTask}>
              <FontAwesomeIcon icon={faAdd} />
            </button>
          </div>
        </div>
      </div>
      <div>
        <ul>
          {tasks.map((item) => {
            return item;
          })}
        </ul>
      </div>
    </div>
  );
}

export default Board;
