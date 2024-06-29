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
    case "RESET_GAME_TO_CONTINUE_MATCH":
      return {
        ...state,
        iconList: ["", "", "", "", "", "", "", "", ""],
        winnerIcon: null,
        iconCount: 0,
        lastIcon: null,
        isGameStarted: false,
      };
    case "RESET_GAME_WITH_NEW_TABLE":
      return {
        ...state,
        iconList: ["", "", "", "", "", "", "", "", ""],
        winnerIcon: null,
        iconCount: 0,
        lastIcon: null,
        isGameStarted: false,
        player1Icon: icons[3].icon1,
        player2Icon: icons[3].icon2,
        selectedIconRowNumber: 3,
      };
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
    case "RESET_GAME_WITH_NEW_TABLE":
      return { ...state, scoreTableRow: [] };
    default:
      return state;
  }
};

export const isGameStartedReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GAME_STARTED":
      return { ...state, isGameStarted: action.payload };
    case "RESET_GAME_TO_CONTINUE_MATCH":
      return { ...state, isGameStarted: false };
    case "RESET_GAME_WITH_NEW_TABLE":
      return { ...state, isGameStarted: false };
    default: {
      return state;
    }
  }
};
