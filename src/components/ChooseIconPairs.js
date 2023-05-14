import React from "react";
import {
  cross,
  circle,
  plus,
  minus,
  smile,
  angry,
  check,
  unCheck,
  snowFlake,
  fire,
} from "./icons";

const ChoosePairs = (props) => {
  const { handleIconChoice } = props;

  const style = {
    maxWidth: "400px",
    right: "0",
    bottom: "0",
    position: "absolute",
    marginRight: "50px",
    marginBottom: "60px",
  };

  return (
    <div className="container" style={style}>
      <h4 className="table-heading">Choose your favourite pair</h4>
      <table
        className="table table-bordered"
        style={{ borderColor: "#D8D8D8" }}
      >
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
          <tr onClick={() => handleIconChoice(smile, angry)}>
            <td>{smile}</td>
            <td>{angry}</td>
          </tr>
          <tr onClick={() => handleIconChoice(check, unCheck)}>
            <td>{check}</td>
            <td>{unCheck}</td>
          </tr>
          <tr onClick={() => handleIconChoice(plus, minus)}>
            <td>{plus}</td>
            <td>{minus}</td>
          </tr>
          <tr onClick={() => handleIconChoice(cross, circle)}>
            <td>{cross}</td>
            <td>{circle}</td>
          </tr>
          <tr onClick={() => handleIconChoice(snowFlake, fire)}>
            <td>{snowFlake}</td>
            <td>{fire}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ChoosePairs;
