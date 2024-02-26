import { useState, useRef, useEffect } from "react";
import "./Game.css";
import GridItem from "./components/GridItem";
import Buttons from "./components/Buttons";
import ScoreTable from "./components/ScoreTable.js";
import ChooseIconPairs from "./components/ChooseIconPairs";
import icons from "./components/icons";

function Game() {
  const [iconList, setIconList] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  const [lastIcon, setLastIcon] = useState(null);
  const [winnerIcon, setWinnerIcon] = useState(null);
  const [iconCount, setIconCount] = useState(0);
  const [scoreTableRow, setScoreTableRow] = useState([]);
  const [player1Icon, setPlayer1Icon] = useState(icons[3].icon1);
  const [player2Icon, setPlayer2Icon] = useState(icons[3].icon2);
  const [selectedIconRowNumber, setSelectedIconRowNumber] = useState(3);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const scoreTableBottomRowRef = useRef(null);

  let gridItemId = 0;

  const scrollToLastRow = () => {
    scoreTableBottomRowRef.current.scrollIntoView({ behavior: "smooth" });
  };
  
  useEffect(scrollToLastRow, [scoreTableRow]);

  function handleIconChoice(icon1, icon2, id) {
    setPlayer1Icon(icon1);
    setPlayer2Icon(icon2);
    setSelectedIconRowNumber(id);
  }

  function checkAndGetWinner2() {
    let finalValue = null;
    if (
      iconList[0] !== "" &&
      iconList[0] === iconList[1] &&
      iconList[1] === iconList[2]
    ) {
      finalValue = iconList[0];
    } else if (
      iconList[0] !== "" &&
      iconList[0] === iconList[4] &&
      iconList[4] === iconList[8]
    ) {
      finalValue = iconList[0];
    } else if (
      iconList[0] !== "" &&
      iconList[0] === iconList[3] &&
      iconList[3] === iconList[6]
    ) {
      finalValue = iconList[0];
    } else if (
      iconList[1] !== "" &&
      iconList[1] === iconList[4] &&
      iconList[4] === iconList[7]
    ) {
      finalValue = iconList[1];
    } else if (
      iconList[2] !== "" &&
      iconList[2] === iconList[5] &&
      iconList[5] === iconList[8]
    ) {
      finalValue = iconList[2];
    } else if (
      iconList[2] !== "" &&
      iconList[2] === iconList[4] &&
      iconList[4] === iconList[6]
    ) {
      finalValue = iconList[2];
    } else if (
      iconList[3] !== "" &&
      iconList[3] === iconList[4] &&
      iconList[4] === iconList[5]
    ) {
      finalValue = iconList[3];
    } else if (
      iconList[6] !== "" &&
      iconList[6] === iconList[7] &&
      iconList[7] === iconList[8]
    ) {
      finalValue = iconList[6];
    }
    setWinnerIcon(finalValue);
    return finalValue;
  }

  function playersScore(winnerIcon) {
    let newRow = [];
    if (winnerIcon !== null) {
      if (winnerIcon === player1Icon) {
        newRow.push(player1Icon, player2Icon, 1, 0);
      } else if (winnerIcon === player2Icon) {
        newRow.push(player1Icon, player2Icon, 0, 1);
      }
      setScoreTableRow((prev) => [...prev, newRow]);
    }
  }

  function handleGridItemClick(gridId) {
    if (iconList[gridId] === "" && winnerIcon === null) {
      const icon = lastIcon === player1Icon ? player2Icon : player1Icon;
      setLastIcon(icon);
      const new_list = iconList;
      new_list[gridId] = icon;
      setIconList(new_list);
      let newIconCounts = iconCount + 1;
      setIconCount(newIconCounts);
      let winnerIcon = checkAndGetWinner2();
      playersScore(winnerIcon);
    }
    if (lastIcon === null) {
      setIsGameStarted(true);
    }
  }

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
                            onClick={handleGridItemClick}
                            icon={iconList[colIndex]}
                          />
                        );
                      })}
                  </div>
                ))}
            </div>
            <Buttons
              setList={setIconList}
              setWinnerIcon={setWinnerIcon}
              setIconCount={setIconCount}
              setLastIcon={setLastIcon}
              winnerIcon={winnerIcon}
              scoreTableRow={scoreTableRow}
              setScoreTableRow={setScoreTableRow}
              setPlayer1Icon={setPlayer1Icon}
              setPlayer2Icon={setPlayer2Icon}
              setSelectedIconRowNumber={setSelectedIconRowNumber}
              setIsGameStarted={setIsGameStarted}
            />
          </div>
          <div className="col-lg-4 col-md-12">
            <ChooseIconPairs
              handleIconChoice={handleIconChoice}
              selectedIconRowNumber={selectedIconRowNumber}
              isGameStarted={isGameStarted}
            />
          </div>
           <div className="col-lg-4 col-md-12">
            <ScoreTable
              scoreTableRow={scoreTableRow}
              winnerIcon={winnerIcon}
              scoreTableBottomRowRef={scoreTableBottomRowRef}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Game;
