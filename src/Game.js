import { useRef, useEffect } from "react";
import "./Game.css";
import GridItem from "./components/GridItem";
import Buttons from "./components/Buttons";
import ScoreTable from "./components/ScoreTable.js";
import ChooseIconPairs from "./components/ChooseIconPairs";
import useGameSelector from "./hooks.js";

function Game() {
  const scoreTableBottomRowRef = useRef(null);
  const scrollToLastRow = () => {
    scoreTableBottomRowRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const {
    iconList,
    winnerIcon,
    player1Icon,
    player2Icon,
    iconCount,
    scoreTableRow,
  } = useGameSelector();

  useEffect(scrollToLastRow, [scoreTableRow]);

  let gridItemId = 0;

  return (
    <>
      <div className="game container">
        <h1 className="game-heading">tic-tac-toe</h1>
        <div className="row">
          <div className="container col-lg-4 col-md-12 mb-5">
            <h4 className="game-winner">
              {winnerIcon === player1Icon
                ? "Player1 Won"
                : winnerIcon === player2Icon
                ? "Player2 Won"
                : iconCount === 9
                ? "Game Draw"
                : null}
            </h4>
            <div className="grid container">
              {Array(3)
                .fill(0)
                .map((el, i) => (
                  <div className="row" key={i}>
                    {Array(3)
                      .fill(0)
                      .map(() => {
                        const colIndex = gridItemId;
                        gridItemId++;
                        return (
                          <GridItem
                            key={colIndex}
                            gridItemId={colIndex}
                            icon={iconList[colIndex]}
                          />
                        );
                      })}
                  </div>
                ))}
            </div>
            <Buttons />
          </div>
          <div className="col-lg-4 col-md-12">
            <ChooseIconPairs />
          </div>
          <div className="col-lg-4 col-md-12">
            <ScoreTable scoreTableBottomRowRef={scoreTableBottomRowRef} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Game;
