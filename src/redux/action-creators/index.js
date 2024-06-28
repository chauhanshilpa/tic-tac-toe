// function handleIconChoice(icon1, icon2, id) {
//   setPlayer1Icon(icon1);
//   setPlayer2Icon(icon2);
//   setSelectedIconRowNumber(id);
// }

// --------------------------------------------------
export const setPlayer1Icon = (icon) => {
  return {
    type: "PLAYER1_ICON",
    payload: icon,
  };
};

export const setPlayer2Icon = (icon) => {
  return {
    type: "PLAYER2_ICON",
    payload: icon,
  };
};

export const setSelectedIconRowNumber = (id) => {
  return {
    type: "SELECTED_ICON_ROW_NUMBER",
    payload: id,
  };
};

// // ------------------------------------------
// // function checkAndGetWinner2() {
// let winningCombination = [
//   [0, 1, 2],
//   [0, 4, 8],
//   [0, 3, 6],
//   [1, 4, 7],
//   [2, 5, 8],
//   [2, 4, 6],
//   [3, 4, 5],
//   [6, 7, 8],
// ];
//   for (let combo of winningCombination){
//     const [a,b,c] = combo
//     if(iconList[a] !== "" && iconList[a] === iconList[b] && iconList[b] === iconList[c]){
//       finalValue = iconList[a]
//       return finalValue;
//     }
//   }
//   setWinnerIcon(finalValue);
// }
// ------------------------------------------------------------------
export const setWinnerIcon = (iconList) => {
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
  return {
    type: "WINNER_ICON",
    payload: finalValue,
  };
};

// function playersScore(winnerIcon) {
//   let newRow = [];
//   if (winnerIcon !== null) {
//     if (winnerIcon === player1Icon) {
//       newRow.push(player1Icon, player2Icon, 1, 0);
//     } else if (winnerIcon === player2Icon) {
//       newRow.push(player1Icon, player2Icon, 0, 1);
//     }
//     setScoreTableRow((prev) => [...prev, newRow]);
//   }
// }

export const updatePlayerScore = (winnerIcon, player1Icon, player2Icon) => {
  let newRow = [];
  if (winnerIcon !== null) {
    if (winnerIcon === player1Icon) {
      newRow.push(player1Icon, player2Icon, 1, 0);
    } else if (winnerIcon === player2Icon) {
      newRow.push(player1Icon, player2Icon, 0, 1);
    }
  }
  return {
    type: "UPDATE_SCORE",
    payload: newRow,
  };
};

// function handleGridItemClick(gridId) {
//   if (iconList[gridId] === "" && winnerIcon === null) {
// const icon = lastIcon === player1Icon ? player2Icon : player1Icon;
// setLastIcon(icon);
//     const new_list = iconList;
//     new_list[gridId] = icon;
//     setIconList(new_list);
//     let newIconCounts = iconCount + 1;
//     setIconCount(newIconCounts);
//     let winnerIcon = checkAndGetWinner2();
//     playersScore(winnerIcon);
//   }
//   if (lastIcon === null) {
//     setIsGameStarted(true);
//   }
// }

export const setIconCount = (iconCount) => {
  return {
    type: "ICON_COUNT",
    payload: iconCount,
  };
};

export const setLastIcon = (player1Icon, player2Icon, lastIcon) => {
  const icon = lastIcon === player1Icon ? player2Icon : player1Icon;
  return {
    type: "LAST_ICON",
    payload: icon,
  };
};

export const setIsGameStarted = (flag) => {
  return {
    type: "GAME_STARTED",
    payload: flag,
  };
};

export const setIconList = (list) => {
  return {
    type: "ICON_LIST",
    payload: list,
  };
};
