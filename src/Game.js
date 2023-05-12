import { useState } from "react";
import "./App.css";
import { cross, circle } from "./components/icons.js";
import GridItem from "./components/GridItem";
import Button from "./components/Button";
import ScoreTable from "./components/ScoreTable.js";

function Game() {
  const [list, setList] = useState(["", "", "", "", "", "", "", "", ""]);
  const [lastIcon, setLastIcon] = useState(null);
  const [winnerIcon, setWinnerIcon] = useState(null);
  const [iconCount, setIconCount] = useState(0);
  const [row, setRow] = useState([0, 0, 0]);

  function checkAndGetWinner() {
    let finalValue = null;
    if (list[0] !== "" && list[0] === list[1] && list[1] === list[2]) {
      finalValue = list[0];
    } else if (list[0] !== "" && list[0] === list[4] && list[4] === list[8]) {
      finalValue = list[0];
    } else if (list[0] !== "" && list[0] === list[3] && list[3] === list[6]) {
      finalValue = list[0];
    } else if (list[1] !== "" && list[1] === list[4] && list[4] === list[7]) {
      finalValue = list[1];
    } else if (list[2] !== "" && list[2] === list[5] && list[5] === list[8]) {
      finalValue = list[2];
    } else if (list[2] !== "" && list[2] === list[4] && list[4] === list[6]) {
      finalValue = list[2];
    } else if (list[3] !== "" && list[3] === list[4] && list[4] === list[5]) {
      finalValue = list[3];
    } else if (list[6] !== "" && list[6] === list[7] && list[7] === list[8]) {
      finalValue = list[6];
    }
    setWinnerIcon(finalValue);
    return finalValue;
  }
  
  function playersScore(winner, count) {
    let newRow = row;
    if(winner !== null || count === 9){
      newRow[0] = newRow[0] + 1
      if(winner === cross){
        newRow[1] = newRow[1] + 1
      }else if(winner === circle){
        newRow[2] = newRow[2] + 1
      }
    }
    setRow(newRow)
  }

  function handleClick(gridId) {
    if (list[gridId] === "" && winnerIcon === null) {
      const icon = lastIcon === cross ? circle : cross;
      setLastIcon(icon);
      const new_list = list;
      new_list[gridId] = icon;
      setList(new_list);
      let newCounts = iconCount + 1
      setIconCount(newCounts);
      let winner = checkAndGetWinner();
      playersScore(winner, newCounts);
    }
  }

  return (
    <>
      <div>
        <h1
          style={{
            color: "red",
            fontSize: "xxx-large",
            marginTop: "20px",
            marginLeft: "95px",
          }}
        >
          tic-tac-toe
        </h1>
        <h3 style={{ color: "green", height: "10px", marginLeft: "95px" }}>
          {winnerIcon === cross
            ? "player1 won"
            : winnerIcon === circle
            ? "player2 won"
            : iconCount === 9
            ? "Game draw"
            : null}
        </h3>
        <div
          className="container"
          style={{
            marginLeft: "95px",
            marginTop: "40px",
            width: "30%",
            display: "block",
          }}
        >
          <div className="row">
            {list.map((el, idx) => (
              <GridItem
                key={idx}
                gridId={idx}
                icon={list[idx]}
                handleClick={handleClick}
              />
            ))}
          </div>
        </div>
        <ScoreTable row={row} />
        <Button
          setList={setList}
          setWinnerIcon={setWinnerIcon}
          setIconCount={setIconCount}
          setLastIcon={setLastIcon}
          winnerIcon={winnerIcon}
          row={row}
          setRow={setRow}
        />
      </div>
    </>
  );
}

export default Game;
