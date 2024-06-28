import { bindActionCreators } from "redux";
import * as actionCreators from "../redux/action-creators/index";
import { useDispatch, useSelector } from "react-redux";

const GridItem = (props) => {
  const { gridItemId, icon } = props;

  const iconList = useSelector((state) => state.iconReducer.iconList);
  const winnerIcon = useSelector((state) => state.iconReducer.winnerIcon);
  const lastIcon = useSelector((state) => state.iconReducer.lastIcon);
  const player1Icon = useSelector((state) => state.iconReducer.player1Icon);
  const player2Icon = useSelector((state) => state.iconReducer.player2Icon);
  const iconCount = useSelector((state) => state.iconReducer.iconCount);

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

  console.log(gridItemId, icon);

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
