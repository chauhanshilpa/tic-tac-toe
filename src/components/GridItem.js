const GridItem = (props) => {
  const { gridId, icon, handleClick } = props;

  return (
    <>
      <div
        className="col-4 col-md-4 col-sm-4 col-lg-4 text-center p-5"
        style={{ border: "solid", height: "20px" }}
        onClick={() => handleClick(gridId)}
        id={gridId}
      >
        {icon}
      </div>
    </>
  );
};

export default GridItem;
