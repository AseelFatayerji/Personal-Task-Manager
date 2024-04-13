import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";

import Board from "../components/Board";
import Navbar from "../components/Navbar";

import "../styles/profile.css";

function Profile() {
  const navigate = useNavigate();

  const [hide, SetHide] = useState("hide");
  const [title, SetTitle] = useState("");
  const [board, SetBaords] = useState([]);

  const token = localStorage.getItem("token");
  const id = localStorage.getItem("id");

  const showPop = () => {
    SetHide("");
  };
  const addBoard = () => {
    const arr = board;
    const temp = <Board title={title} />;
    arr.push(temp);
    SetBaords(arr);
    SetHide("hide");
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
  });
  return (
    <div className="float gap">
      <Navbar />
      <div>
        <div>
          <button onClick={showPop}>
            Add Board <FontAwesomeIcon icon={faAdd} />
          </button>
          <div className={"float space-even " + hide}>
            <div>
              <input type="text" placeholder="title" onChange={(e)=>{SetTitle(e.target.value)}}/>
            </div>
            <div></div>
            <button onClick={addBoard}>
              <FontAwesomeIcon icon={faAdd} />
            </button>
          </div>
        </div>
        <div className="float space-even gap boards">
          {board.map((item) => {
            return <div>{item} </div>;
          })}
        </div>
      </div>
    </div>
  );
}

export default Profile;
