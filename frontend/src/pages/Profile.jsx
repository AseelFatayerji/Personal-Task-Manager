import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd, faClipboardList } from "@fortawesome/free-solid-svg-icons";

import { useDispatch, useSelector } from "react-redux";
import { reorderTasks, switchBoard } from "../store/slices/taskSlice";

import { DragDropContext } from "react-beautiful-dnd";

import Board from "../components/Board";
import Navbar from "../components/Navbar";

import "../styles/profile.css";

function Profile() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const task = useSelector((state) => state.text);
  console.log(task);

  const [hide, SetHide] = useState("hide");
  const [title, SetTitle] = useState("");
  const [board, SetBaords] = useState([]);

  const token = localStorage.getItem("token");
  const id = localStorage.getItem("id");

  const removeDuplicates = (arr) => {
    let unique = [];
    let ids = [];
    arr.forEach((element) => {
      if (!ids.includes(element.board_id)) {
        ids.push(element.board_id);
        unique.push(element);
      }
    });
    return unique;
  };
  const hanedleOnDragEnd = (result) => {
    const { source, destination } = result;
    // dropped outside the list
    if (!destination) {
      return;
    }
    if (source.droppableId === destination.droppableId) {
      const temp = [...task];
      const [reordered] = temp.splice(result.source.index, 1);
      temp.splice(result.destination.index, 0, reordered);
      dispatch(reorderTasks(temp));
      setBaords();
    } else {
      const newOrder = task.map((item, index) => {
        if (index !== result.source.index) {
          return item;
        } else {
          const temp = {
            board_id: parseInt(destination.droppableId),
            board: item.board,
            content: item.content,
            title: item.title,
          };
          return temp;
        }
      });
      dispatch(switchBoard(newOrder));
      setBaords();
    }
  };
  const showPop = () => {
    SetHide("");
  };
  const addBoard = () => {
    const arr = board;
    const temp = (
      <Board
        title={title}
        id={title}
        code={arr.length}
        key={title + "" + arr.length}
      />
    );
    arr.push(temp);
    SetBaords(arr);
    SetHide("hide");
  };
  const setBaords = () => {
    const boards = removeDuplicates(task);
    const set = [];
    boards.map((items, index) => {
      const temp = (
        <Board
          title={items.board}
          id={items.board_id}
          code={items.board_id}
          key={items.board_id}
        />
      );
      set.push(temp);
    });
    SetBaords(set);
  };

  const checkToken = () => {
    const url = "//localhost:3001/verify/" + token;
    axios
      .get(url)
      .then((resp) => {
        if (resp.status !== 201) {
          setTimeout(() => {
            navigate("/");
          }, 2000);
        }
      })
      .catch((err) => {
        console.log(err);
        setTimeout(() => {
          navigate("/");
        }, 2000);
      });
  };
  useEffect(() => {
    checkToken();
    setBaords();
  }, []);
  return (
    <div className="float gap">
      <Navbar />
      <div className="main">
        <div>
          <div className="float right">
            <FontAwesomeIcon icon={faAdd} onClick={showPop} className="add" />
          </div>

          <div className={"card " + hide}>
            <div className="card-header">Add Board</div>
            <div className="float card-body">
              <div className="inputs float">
                <div>
                  <FontAwesomeIcon icon={faClipboardList} className="icon" />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="title"
                    onChange={(e) => {
                      SetTitle(e.target.value);
                    }}
                  />
                </div>
                <div>
                  <button onClick={addBoard}>
                    <FontAwesomeIcon icon={faAdd} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="float space-around gap-3 boards">
          <DragDropContext onDragEnd={hanedleOnDragEnd}>
            {board.map((item) => {
              return item;
            })}
          </DragDropContext>
        </div>
      </div>
    </div>
  );
}

export default Profile;
