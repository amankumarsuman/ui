import React from "react";
import TopChefsHeading from "../topChefHeading/TopChefsHeading";
import "./headerStyle.css";
function Header() {
  return (
    <div className="mainContainers">
      <div className="header">
        <img src="./logo.png" alt="logo" />
        <img
          style={{ marginLeft: "20px" }}
          src="./CompanyLogo.png"
          alt="logo2"
        />
      </div>
      <div style={{ border: "1px solid grey" }}></div>
      <TopChefsHeading heading={"VARIETIES"} />
    </div>
  );
}

export default Header;
