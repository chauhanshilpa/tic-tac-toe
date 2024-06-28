import { useRef, useEffect } from "react";
import "./Game.css";
import GridItem from "./components/GridItem";
import Buttons from "./components/Buttons";
import ScoreTable from "./components/ScoreTable.js";
import ChooseIconPairs from "./components/ChooseIconPairs";
import { useSelector } from "react-redux";

function Game() {
  const scoreTableRow = useSelector(
    (state) => state.scoreTableReducer.scoreTableRow
  );
  const player1Icon = useSelector((state) => state.iconReducer.player1Icon);
  const player2Icon = useSelector((state) => state.iconReducer.player2Icon);
  const winnerIcon = useSelector((state) => state.iconReducer.winnerIcon);
  const iconCount = useSelector((state) => state.iconReducer.iconCount);
  const iconList = useSelector((state) => state.iconReducer.iconList);

  const scoreTableBottomRowRef = useRef(null);

  let gridItemId = 0;

  const scrollToLastRow = () => {
    scoreTableBottomRowRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToLastRow, [scoreTableRow]);

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
