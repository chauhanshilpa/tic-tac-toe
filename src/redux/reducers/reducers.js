import icons from "../../components/icons";

const initialState = {
  player1Icon: icons[3].icon1,
  player2Icon: icons[3].icon2,
  selectedIconRowNumber: 3,
  winnerIcon: null,
  scoreTableRow: [],
  iconCount: 0,
  lastIcon: null,
  isGameStarted: false,
  iconList: ["", "", "", "", "", "", "", "", ""],
  gridIdState: 0,
};

export const iconReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PLAYER1_ICON":
      return { ...state, player1Icon: action.payload };
    case "PLAYER2_ICON":
      return { ...state, player2Icon: action.payload };
    case "SELECTED_ICON_ROW_NUMBER":
      return { ...state, selectedIconRowNumber: action.payload };
    case "WINNER_ICON":
      return { ...state, winnerIcon: action.payload };
    case "ICON_COUNT":
      return { ...state, iconCount: action.payload };
    case "LAST_ICON":
      return { ...state, lastIcon: action.payload };
    case "ICON_LIST":
      return { ...state, iconList: ((prev) => prev, [...action.payload]) };
    default:
      return state;
  }
};

export const scoreTableReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_SCORE":
      return {
        ...state,
        scoreTableRow: [...state.scoreTableRow, action.payload],
      };
    default:
      return state;
  }
};

export const isGameStartedReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GAME_STARTED":
      return { ...state, isGameStarted: action.payload };
    default: {
      return state;
    }
  }
};

