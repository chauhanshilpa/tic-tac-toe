import React from "react";

const Button = (props) => {
  const {
    setList,
    setWinnerIcon,
    setIconCount,
    setLastIcon,
    scoreTableRow,
    setScoreTableRow,
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
