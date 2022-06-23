import React from "react";

function Header() {
  return (
    <div>
      <div style={{ padding: "20px" }}>
        <img src="./logo.png" alt="logo" />
        <img
          style={{ marginLeft: "20px" }}
          src="./CompanyLogo.png"
          alt="logo2"
        />
      </div>
      <div style={{ border: "1px solid grey" }}></div>
    </div>
  );
}

export default Header;
