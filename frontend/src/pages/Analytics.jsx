import Navbar from "../components/Navbar";
import "../styles/board.css";

import { useSelector } from "react-redux";

import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Pie } from "react-chartjs-2";

import { useState } from "react";

Chart.register(CategoryScale);

function Charts() {
  const task = useSelector((state) => state.text);
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
  const countDuplicates = (arr) => {
    const counts = [];
    arr.forEach((value) => {
      if (!counts[value.board_id]) {
        counts[value.board_id] = 1;
      } else {
        counts[value.board_id]++;
      }
    });
    return counts;
  };
  const labels = removeDuplicates(task);
  const tasks = countDuplicates(task);
  const [chartData, setChartData] = useState({
    labels: labels.map((item) => item.board),
    datasets: [
      {
        label: "Total Tasks",
        data: tasks.map((item) => item),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 1,
      },
    ],
  });
  return (
    <div className="float gap">
      <Navbar />
      <div>
        <div>
          <Pie
            data={chartData}
            options={{
              plugins: {
                title: {
                  display: true,
                  text: "Tasks in Progress",
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Charts;
