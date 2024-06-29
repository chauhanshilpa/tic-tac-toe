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

export const setWinnerIcon = (iconList) => {
  let finalValue = null;
  const winningCombinations = [
    [0, 1, 2],
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];
  for (let combo of winningCombinations) {
    let [a, b, c] = combo;
    if (
      iconList[a] !== "" &&
      iconList[a] === iconList[b] &&
      iconList[b] === iconList[c]
    ) {
      finalValue = iconList[a];
      break;
    }
  }
  return {
    type: "WINNER_ICON",
    payload: finalValue,
  };
};

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

export const resetGameToContinueMatch = () => {
  return {
    type: "RESET_GAME_TO_CONTINUE_MATCH",
  };
};

export const resetGameWithNewTable = () => {
  return {
    type: "RESET_GAME_WITH_NEW_TABLE",
  };
};
