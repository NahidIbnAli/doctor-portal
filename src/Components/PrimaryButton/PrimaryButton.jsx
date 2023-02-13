import React from "react";

const PrimaryButton = ({ children, handler }) => {
  return (
    <button
      onClick={handler}
      className={`btn text-white border-0 bg-gradient-to-r from-secondary to-primary hover:bg-gradient-to-r hover:from-primary hover:to-secondary`}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
