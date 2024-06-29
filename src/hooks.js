import { useSelector } from "react-redux";

const useGameSelector = () => {
  const iconList = useSelector((state) => state.iconReducer.iconList);
  const winnerIcon = useSelector((state) => state.iconReducer.winnerIcon);
  const lastIcon = useSelector((state) => state.iconReducer.lastIcon);
  const player1Icon = useSelector((state) => state.iconReducer.player1Icon);
  const player2Icon = useSelector((state) => state.iconReducer.player2Icon);
  const iconCount = useSelector((state) => state.iconReducer.iconCount);
  const scoreTableRow = useSelector(
    (state) => state.scoreTableReducer.scoreTableRow
  );
  const selectedIconRowNumber = useSelector(
    (state) => state.iconReducer.selectedIconRowNumber
  );
  const isGameStarted = useSelector(
    (state) => state.isGameStartedReducer.isGameStarted
  );

  return {
    iconList,
    winnerIcon,
    lastIcon,
    player1Icon,
    player2Icon,
    iconCount,
    scoreTableRow,
    selectedIconRowNumber,
    isGameStarted,
  };
};

export default useGameSelector;
