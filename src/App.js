import { useState } from "react";
import GridItem from "./components/GridItem";
import Button from "./components/Button";

function App() {
  const [list, setList] = useState(["", "", "", "", "", "", "", "", ""]);
  const [lastIcon, setLastIcon] = useState(null)
  const [winnerIcon, setWinnerIcon] = useState(null);
  const [count, setCount] = useState(0);
  function isWinner() {
    if (list[0] !== "" && list[0] === list[1] && list[1] === list[2]) {
      setWinnerIcon(list[0]);
    } else if (list[0] !== "" && list[0] === list[4] && list[4] === list[8]) {
      setWinnerIcon(list[0]);
    } else if (list[0] !== "" && list[0] === list[3] && list[3] === list[6]) {
      setWinnerIcon(list[0]);
    } else if (list[1] !== "" && list[1] === list[4] && list[4] === list[7]) {
      setWinnerIcon(list[1]);
    } else if (list[2] !== "" && list[2] === list[5] && list[5] === list[8]) {
      setWinnerIcon(list[2]);
    } else if (list[2] !== "" && list[2] === list[4] && list[4] === list[6]) {
      setWinnerIcon(list[2]);
    } else if (list[3] !== "" && list[3] === list[4] && list[4] === list[5]) {
      setWinnerIcon(list[3]);
    } else if (list[6] !== "" && list[6] === list[7] && list[7] === list[8]) {
      setWinnerIcon(list[6]);
    } else {
      setWinnerIcon(null);
    }
    setCount(count + 1);
  }

  function handleClick(gridId) {
    if( list[gridId] === "" && winnerIcon === null){
      const icon = lastIcon === "❌" ? "⭕" : "❌";
      setLastIcon(icon);
      const new_list = list;
      new_list[gridId] = icon;
      setList(new_list);
      isWinner();
    }
  }

  return (
    <>
      <div>
        <h1
          className="text-center"
          style={{ color: "red", fontSize: "xxx-large" }}
        >
          tic-tac-toe
        </h1>
        <h2
          className="text-center"
          style={{
            fontSize: "xx-large",
            height: "50px"
          }}
        >
          {winnerIcon === "❌"
            ? "player1 won"
            : winnerIcon === "⭕"
            ? "player2 won"
            : count === 9 && winnerIcon === null
            ? "draw"
            : null}
        </h2>
      </div>
      <div className="container">
        <div className="row">
          {list.map((el, idx) => (
            <GridItem
              key={idx}
              gridId={idx}
              icon={list[idx]}
              handleClick={handleClick}
            />
          ))}
        </div>
      </div>
      <Button
        setList={setList}
        setWinnerIcon={setWinnerIcon}
        setCount={setCount}
        setLastIcon={setLastIcon}
      />
    </>
  );
}

export default App;
