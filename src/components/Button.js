import React from "react";
import {cross, circle} from "./icons";

const Button = (props) => {
  const {
    setList,
    setWinnerIcon,
    setIconCount,
    setLastIcon,
    scoreTableRow,
    setScoreTableRow,
    setPlayer1Icon,
    setPlayer2Icon
  } = props;

  function resetGameToContinueMatch() {
    setList(["", "", "", "", "", "", "", "", ""]);
    setWinnerIcon(null);
    setIconCount(0);
    setLastIcon(null);
  }

  function resetGameWithNewTable() {
    resetGameToContinueMatch();
    setScoreTableRow([0, 0, 0]);
    setPlayer1Icon(cross)
    setPlayer2Icon(circle)
  }

  return (
    <>
      <div>
        <button
          type="button"
          style={{ marginLeft: "95px" }}
          className="btn btn-primary my-4"
          onClick={resetGameToContinueMatch}
          disabled={scoreTableRow[0] === 10 && "true"}
        >
          Play Again
        </button>
        <button
          type="button"
          className="btn btn-primary "
          onClick={resetGameWithNewTable}
          style={{ marginLeft: "15px" }}
        >
          Reset Table
        </button>
      </div>
    </>
  );
};

export default Button;
