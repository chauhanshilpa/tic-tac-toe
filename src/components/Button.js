import React, { useState } from "react";

const Button = (props) => {
  const { setList, setWinnerIcon, setIconCount, setLastIcon, row, setRow } =
    props;

  function handleReset() {
    setList(["", "", "", "", "", "", "", "", ""]);
    setWinnerIcon(null);
    setIconCount(0);
    setLastIcon(null);
  }

  function resetTable() {
    setList(["", "", "", "", "", "", "", "", ""]);
    setWinnerIcon(null);
    setIconCount(0);
    setLastIcon(null);
    setRow([0, 0, 0]);
  }

  return (
    <>
      <div>
        <button
          type="button"
          style={{ marginLeft: "95px" }}
          className="btn btn-primary my-4"
          onClick={handleReset}
          disabled={row[0] === 10 && "true"}
        >
          Play Again
        </button>
        <button
          type="button"
          class="btn btn-primary "
          onClick={resetTable}
          style={{ marginLeft: "15px" }}
        >
          Reset Table
        </button>
      </div>
    </>
  );
};

export default Button;
