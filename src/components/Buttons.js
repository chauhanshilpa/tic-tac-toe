import React from "react";
import icons from "./icons";

const Buttons = (props) => {
  const {
    setIconList,
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
    setIconList(["", "", "", "", "", "", "", "", ""]);
    setWinnerIcon(null);
    setIconCount(0);
    setLastIcon(null);
    setIsGameStarted(false);
  }

  function resetGameWithNewTable() {
    resetGameToContinueMatch();
    setScoreTableRow([]);
    setPlayer1Icon(icons[3].icon1);
    setPlayer2Icon(icons[3].icon2);
    setSelectedIconRowNumber(3);
  }

  return (
    <>
      <div>
        <button
          type="button"
          className="btn btn-primary mt-4"
          onClick={resetGameToContinueMatch}
          disabled={scoreTableRow[0] === 10 && "true"}
        >
          Play Again
        </button>
        <button
          type="button"
          className="btn btn-primary mt-4 mx-2"
          onClick={resetGameWithNewTable}
        >
          Reset Table
        </button>
      </div>
    </>
  );
};

export default Buttons;
