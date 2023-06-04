const GridItem = (props) => {
  const { gridItemId, icon, onClick } = props;

  return (
    <div
      className="grid-item col-4 col-sm-4 col-md-4 d-flex justify-content-center align-items-center"
      onClick={() => onClick(gridItemId)}
    >
      {icon}
    </div>
  );
};

export default GridItem;

