import React from "react";
import icons from "./icons";

const ChoosePairs = (props) => {
  const { handleIconChoice, selectedIconRowNumber, isGameStarted } = props;

  const style = {
    maxWidth: "350px",
    right: "0",
    top: "0",
    position: "absolute",
    marginRight: "50px",
    marginTop: "110px",
  };

  return (
    <div className="container" style={style}>
      <h4 className="table-heading">Choose your favourite pair</h4>
      <table className="table icons-table table-bordered table-hover ">
        <thead>
          <tr>
            <th scope="col" className="player1">
              Player1
            </th>
            <th scope="col" className="player2">
              Player2
            </th>
          </tr>
        </thead>
        <tbody>
          {icons.map((el, idx) => (
            <tr
              onClick={() => handleIconChoice(el.icon1, el.icon2, idx)}
              key={idx}
              className={selectedIconRowNumber === idx ? "active" : null}
              style={{ pointerEvents: isGameStarted && "none" }}
            >
              <td>{el.icon1}</td>
              <td>{el.icon2}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ChoosePairs;
