import React from "react";

const Header = ({ text }) => {
  return (
    <div className="ha">
      <div className="ha__wrapper">
        <h1>{text}</h1>
      </div>
    </div>
  );
};

export default Header;
