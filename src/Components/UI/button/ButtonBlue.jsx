import React from "react";

const ButtonBlue = ({ children, className, ...props }) => {
  const classes = "buttonBlue " + className;

  return (
    <button {...props} className={classes}>
      <p>{children}</p>
    </button>
  );
};

export default ButtonBlue;