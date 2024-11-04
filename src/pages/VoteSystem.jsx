import React, { useState, useEffect } from "react";
import data from "../data/project.json";
import codedata from "../data/code.json";
import "./VoteSystem.css";

export default function VoteSystem() {
  const [serialNumber, setSerialNumber] = useState("");
  const [answers, setAnswers] = useState({ q1: "", q2: "", q3: "" });
  const [voteCounts, setVoteCounts] = useState(
    JSON.parse(localStorage.getItem("voteCounts")) ||
    data.reduce((acc, project) => {
      acc[project.id] = { q1: 0, q2: 0, q3: 0 };
      return acc;
    }, {})
  );

  const questionLabels = {
    q1: "最喜歡的組別",
    q2: "最有創意的組別",
    q3: "最佳呈現的組別"
  };

  const [usedSerialNumbers, setUsedSerialNumbers] = useState(
    JSON.parse(localStorage.getItem("usedSerialNumbers")) || []
  );

  useEffect(() => {
    localStorage.setItem("voteCounts", JSON.stringify(voteCounts));
    localStorage.setItem("usedSerialNumbers", JSON.stringify(usedSerialNumbers));
  }, [voteCounts, usedSerialNumbers]);

  const handleSerialChange = (e) => setSerialNumber(e.target.value);

  const handleAnswerChange = (e) => {
    const { name, value } = e.target;
    setAnswers((prevAnswers) => ({ ...prevAnswers, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (serialNumber) {
      if (codedata.includes(Number(serialNumber))) {
        if (!usedSerialNumbers.includes(serialNumber)) {
          if (Object.values(answers).every(answer => answer !== "")) {
            const updatedVoteCounts = { ...voteCounts };
            Object.entries(answers).forEach(([question, answer]) => {
              if (answer) {
                updatedVoteCounts[answer][question] += 1;
              }
            });
            setVoteCounts(updatedVoteCounts);
            setUsedSerialNumbers((prev) => [...prev, serialNumber]);
            alert("投票成功！謝謝你的參與！");
          } else {
            alert("請為所有問題提供答案！");
          }
        } else {
          alert("該序號已被使用，無法再次投票。");
        }
      } else {
        alert("序號不存在，請檢查後再試。");
      }
    } else {
      alert("請先輸入序號才能進行投票！");
    }
  };

  const handleReset = () => {
    const resetCounts = data.reduce((acc, project) => {
      acc[project.id] = { q1: 0, q2: 0, q3: 0 };
      return acc;
    }, {});
    setVoteCounts(resetCounts);
    localStorage.removeItem("voteCounts");
    setUsedSerialNumbers([]);
    localStorage.removeItem("usedSerialNumbers");
    alert("投票結果已清除！");
  };

  const maxVotes = Math.max(
    ...Object.values(voteCounts).flatMap(counts => Object.values(counts))
  );

  return (
    <div className="vote-system">
      <h3>投票</h3>
      <form onSubmit={handleSubmit}>
        <label>
          入場券序號：
          <input type="text" value={serialNumber} onChange={handleSerialChange} />
        </label>
        <div className="questions">
          {Object.entries(questionLabels).map(([qKey, label]) => (
            <div className="question" key={qKey}>
              <label>{label}</label>
              <select name={qKey} value={answers[qKey]} onChange={handleAnswerChange}>
                <option value="">請選擇一組</option>
                {data.map((project) => (
                  <option key={project.id} value={project.id}>
                    第{project.id}組 : {project.title}
                  </option>
                ))}
              </select>
            </div>
          ))}
        </div>
        <button type="submit">提交投票</button>
      </form>

      <h3>投票結果</h3>
      <div className="vote-results">
        {Object.entries(questionLabels).map(([qKey, label]) => (
          <div key={qKey} className="vote-chart">
            <h4>{label}投票結果</h4>
            <div className="vote-bars">
              {data.map((project) => (
                <div key={project.id} className="vote-item">
                  <div className="vote-bar-container">
                    <div
                      className="vote-bar"
                      style={{
                        height: `${(voteCounts[project.id][qKey] / maxVotes) * 100}%`,
                      }}
                    ></div>
                  </div>
                  <span className="vote-label">
                    <div>第{project.id}組</div>
                    <div>{project.title}</div>
                    <br/>
                    <div>{voteCounts[project.id][qKey]} 票</div>
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/*<button onClick={handleReset}>清除結果</button> */}
    </div>
  );
}
