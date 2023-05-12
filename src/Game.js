import { useState } from "react";
import "./App.css";
import { cross, circle } from "./components/icons.js";
import GridItem from "./components/GridItem";
import Button from "./components/Button";
import ScoreTable from "./components/ScoreTable.js";

function Game() {
  const [iconList, setIconList] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  const [lastIcon, setLastIcon] = useState(null);
  const [winnerIcon, setWinnerIcon] = useState(null);
  const [iconCount, setIconCount] = useState(0);
  const [scoreTableRow, setScoreTableRow] = useState([0, 0, 0]);

  function checkAndGetWinner2() {
    let finalValue = null;
    if (
      iconList[0] !== "" &&
      iconList[0] === iconList[1] &&
      iconList[1] === iconList[2]
    ) {
      finalValue = iconList[0];
    } else if (
      iconList[0] !== "" &&
      iconList[0] === iconList[4] &&
      iconList[4] === iconList[8]
    ) {
      finalValue = iconList[0];
    } else if (
      iconList[0] !== "" &&
      iconList[0] === iconList[3] &&
      iconList[3] === iconList[6]
    ) {
      finalValue = iconList[0];
    } else if (
      iconList[1] !== "" &&
      iconList[1] === iconList[4] &&
      iconList[4] === iconList[7]
    ) {
      finalValue = iconList[1];
    } else if (
      iconList[2] !== "" &&
      iconList[2] === iconList[5] &&
      iconList[5] === iconList[8]
    ) {
      finalValue = iconList[2];
    } else if (
      iconList[2] !== "" &&
      iconList[2] === iconList[4] &&
      iconList[4] === iconList[6]
    ) {
      finalValue = iconList[2];
    } else if (
      iconList[3] !== "" &&
      iconList[3] === iconList[4] &&
      iconList[4] === iconList[5]
    ) {
      finalValue = iconList[3];
    } else if (
      iconList[6] !== "" &&
      iconList[6] === iconList[7] &&
      iconList[7] === iconList[8]
    ) {
      finalValue = iconList[6];
    }
    setWinnerIcon(finalValue);
    return finalValue;
  }

  function playersScore(winnerIcon, iconCounts) {
    let newRow = scoreTableRow;
    if (winnerIcon !== null || iconCounts === 9) {
      newRow[0] = newRow[0] + 1;
      if (winnerIcon === cross) {
        newRow[1] = newRow[1] + 1;
      } else if (winnerIcon === circle) {
        newRow[2] = newRow[2] + 1;
      }
    }
    setScoreTableRow(newRow);
  }

  function handleGridItemClick(gridId) {
    if (iconList[gridId] === "" && winnerIcon === null) {
      const icon = lastIcon === cross ? circle : cross;
      setLastIcon(icon);
      const new_list = iconList;
      new_list[gridId] = icon;
      setIconList(new_list);
      let newIconCounts = iconCount + 1;
      setIconCount(newIconCounts);
      let winnerIcon = checkAndGetWinner2();
      playersScore(winnerIcon, newIconCounts);
    }
  }

  return (
    <>
      <div>
        <h1
          style={{
            color: "red",
            fontSize: "4rem",
            marginTop: "20px",
            marginLeft: "95px",
          }}
        >
          tic-tac-toe
        </h1>
        <h4 style={{ color: "green", height: "2px", marginLeft: "95px", fontSize: "1.5rem" }}>
          {winnerIcon === cross
            ? "Player1 Won"
            : winnerIcon === circle
            ? "Player2 Won"
            : iconCount === 9
            ? "Game Draw"
            : null}
        </h4>
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
            {iconList.map((el, idx) => (
              <GridItem
                key={idx}
                gridId={idx}
                icon={iconList[idx]}
                onClick={handleGridItemClick}
              />
            ))}
          </div>
        </div>
        <ScoreTable scoreTableRow={scoreTableRow} />
        <Button
          setList={setIconList}
          setWinnerIcon={setWinnerIcon}
          setIconCount={setIconCount}
          setLastIcon={setLastIcon}
          winnerIcon={winnerIcon}
          scoreTableRow={scoreTableRow}
          setScoreTableRow={setScoreTableRow}
        />
      </div>
    </>
  );
}

export default Game;
