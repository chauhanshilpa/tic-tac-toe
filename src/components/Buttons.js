import React from "react";
import icons from "./icons";
import { bindActionCreators } from "redux";
import * as actionCreators from "../redux/action-creators/index";
import {useDispatch, useSelector } from "react-redux";

const Buttons = () => {
  const dispatch = useDispatch();

  const scoreTableRow = useSelector(
    (state) => state.scoreTableReducer.scoreTableRow
  );
  const iconList = useSelector((state) => state.iconReducer.iconList);

  const {
    setIconList,
    setWinnerIcon,
    setIconCount,
    setLastIcon,
    setScoreTableRow,
    setPlayer1Icon,
    setPlayer2Icon,
    setSelectedIconRowNumber,
    setIsGameStarted,
  } = bindActionCreators(actionCreators, dispatch);
  
  function resetGameToContinueMatch() {
    setIconList(["", "", "", "", "", "", "", "", ""]);
    setWinnerIcon(iconList);
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
