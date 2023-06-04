import React from "react";
import icons from "./icons";

const ChoosePairs = (props) => {
  const { handleIconChoice, selectedIconRowNumber, isGameStarted } = props;

  return (
    <>
      <h4 className="table-heading">Choose your favourite pair</h4>
      <div className="chooseIcon-table table-scroll text-center mb-5">
        <table className="table table-bordered table-hover">
          <thead className="sticky-top">
            <tr>
              <th scope="col">
                Player1
              </th>
              <th scope="col">
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
                style={{
                  pointerEvents: isGameStarted && "none",
                  filter:
                    isGameStarted && selectedIconRowNumber !== idx
                      ? "blur(2px)"
                      : "none",
                }}
              >
                <td>{el.icon1}</td>
                <td>{el.icon2}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ChoosePairs;
