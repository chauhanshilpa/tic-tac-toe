import React, { useState } from "react";

const ScoreTable = (props) => {
  const { row } = props;

  const style = {
    maxWidth: "400px",
    right: "0",
    top: "0",
    position: "absolute",
    marginRight: "50px",
    marginTop: "20px",
  };

  return (
    <div className="container" style={style}>
      <h4 className="table-heading">Score Board</h4>
      <table
        className="table table-bordered score_table"
        style={{ borderColor: "#D8D8D8" }}
      >
        <thead>
          <tr>
            <th scope="col">Total Match</th>
            <th scope="col" className="player1">
              Player1
            </th>
            <th scope="col" className="player2">
              Player2
            </th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ height: "35px" }}>
            <th scope="row">{row[0]}</th>
            <td>{row[1]}</td>
            <td>{row[2]}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ScoreTable;
