import { bindActionCreators } from "redux";
import * as actionCreators from "../redux/action-creators/index";
import { useDispatch } from "react-redux";
import useGameSelector from "../hooks";

const GridItem = (props) => {
  const { gridItemId, icon } = props;
  const {
    iconList,
    winnerIcon,
    lastIcon,
    player1Icon,
    player2Icon,
    iconCount,
  } = useGameSelector();

  const dispatch = useDispatch();
  const {
    setWinnerIcon,
    setIconCount,
    setLastIcon,
    setIsGameStarted,
    setIconList,
    updatePlayerScore,
  } = bindActionCreators(actionCreators, dispatch);

  function handleGridItemClick(gridId) {
    if (iconList[gridId] === "" && winnerIcon === null) {
      const icon = lastIcon === player1Icon ? player2Icon : player1Icon;
      setLastIcon(icon);
      const new_list = iconList;
      new_list[gridId] = icon;
      setIconList(new_list);
      let newIconCounts = iconCount + 1;
      setIconCount(newIconCounts);
      let iconWon = setWinnerIcon(iconList);
      if (iconWon.payload !== null) {
        updatePlayerScore(iconWon.payload, player1Icon, player2Icon);
      }
    }
    if (lastIcon === null) {
      setIsGameStarted(true);
    }
  }

  return (
    <div
      className="grid-item col-4 col-sm-4 col-md-4 d-flex justify-content-center align-items-center"
      onClick={() => handleGridItemClick(gridItemId)}
    >
      {icon}
    </div>
  );
};

export default GridItem;
