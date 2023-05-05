import React from "react";

const Button = (props) => {
  const { setList, setWinnerIcon, setCount, setLastIcon} = props;

  function handleReset() {
    setList(["", "", "", "", "", "", "", "", ""]);  
    setWinnerIcon(null);
    setCount(0);
    setLastIcon(null);
    // console.log(defaultList)
    // console.log(defaultIcon)
  }

  return (
    <div style={{ textAlign: "center" }}>
      <button
        type="button"
        className="btn btn-primary my-4"
        onClick={handleReset}
      >
        Reset Game
      </button>
    </div>
  );
};

export default Button;


