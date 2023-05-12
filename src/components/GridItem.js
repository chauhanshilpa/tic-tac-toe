const GridItem = (props) => {
  const { gridId, icon, onClick } = props;

  return (
    <div
      className="col-4 col-sm-4 text-center p-5"
      style={{ border: "solid", height: "20px" }}
      onClick={() => onClick(gridId)}
      id={gridId}
    >
      {icon}
    </div>
  );
};

export default GridItem;
