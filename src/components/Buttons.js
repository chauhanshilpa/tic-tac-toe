import React from "react";
import { bindActionCreators } from "redux";
import * as actionCreators from "../redux/action-creators/index";
import {useDispatch, useSelector } from "react-redux";

const Buttons = () => {
  const dispatch = useDispatch();

  const scoreTableRow = useSelector(
    (state) => state.scoreTableReducer.scoreTableRow
  );

  const { resetGameToContinueMatch, resetGameWithNewTable } =
    bindActionCreators(actionCreators, dispatch);

  return (
    <>
      <div>
        <button
          type="button"
          className="btn btn-primary mt-4"
          onClick={resetGameToContinueMatch}
          disabled={scoreTableRow.length >= 10 ? true: false}
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
