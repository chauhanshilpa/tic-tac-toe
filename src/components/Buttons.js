import React from "react";
import icons from "./icons";

const Buttons = (props) => {
  const {
    setList,
    setWinnerIcon,
    setIconCount,
    setLastIcon,
    scoreTableRow,
    setScoreTableRow,
    setPlayer1Icon,
    setPlayer2Icon,
    setSelectedIconRowNumber,
    setIsGameStarted,
  } = props;

  function resetGameToContinueMatch() {
    setList(["", "", "", "", "", "", "", "", ""]);
    setWinnerIcon(null);
    setIconCount(0);
    setLastIcon(null);
    setIsGameStarted(false);
  }

  function resetGameWithNewTable() {
    resetGameToContinueMatch();
    setScoreTableRow([0, 0, 0]);
    setPlayer1Icon(icons[0].icon1);
    setPlayer2Icon(icons[0].icon2);
    setSelectedIconRowNumber(0);
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

export default Buttons;
