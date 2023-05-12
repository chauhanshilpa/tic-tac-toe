import React from "react";

const ScoreTable = (props) => {
  const { scoreTableRow } = props;

  const style = {
    maxWidth: "400px",
    right: "0",
    top: "0",
    position: "absolute",
    marginRight: "50px",
    marginTop: "95px",
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
            <th scope="row">{scoreTableRow[0]}</th>
            <td>{scoreTableRow[1]}</td>
            <td>{scoreTableRow[2]}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ScoreTable;
