import React from "react";

const ScoreTable = (props) => {
  const { scoreTableRow } = props;

  const style = {
    maxWidth: "350px",
    right: "400px",
    top: "0",
    position: "absolute",
    marginRight: "15px",
    marginTop: "110px",
  };

  return (
    <div className="container" style={style}>
      <h4 className="table-heading">Score Board</h4>
      <div className={`table-scroll ${scoreTableRow.length < 7 && "hide-scrollbar"}`}>
        <table
          className="table table-bordered score-table"
          style={{ textAlign: "center" }}

        >
          <thead className="sticky-top">
            <tr>
              <th scope="col" className="winner-icon">
                Icons Pair
              </th>
              <th scope="col" className="player1" >
                Player1
              </th>
              <th scope="col" className="player2" >
                Player2
              </th>
            </tr>
          </thead>
          <tbody>
            {scoreTableRow.map((el,idx) => (
              <tr style={{ height: "35px" }} key={idx}>
                <td>
                  <span style={{ margin: "5px", fontSize: "15px" }}>
                    {el[0]}
                  </span>
                  <span style={{ margin: "5px", fontSize: "15px" }}>
                    {el[1]}
                  </span>
                </td>
                <td>{el[2]}</td>
                <td>{el[3]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ScoreTable;
