import { Divider } from "@mui/material";
import React from "react";
import "./topChefStyle.css";
function TopChefsHeading({ heading }) {
  return (
    <>
      <div>
        <div className="mainContainer">
          <h1>{heading}</h1>
          <Divider
            sx={{
              border: "2px solid #342679",
              width: "150px",
              margin: "auto",
              marginTop: "10px",
              marginLeft: 0,
            }}
            variant="middle"
          />
        </div>
      </div>
    </>
  );
}

export default TopChefsHeading;
