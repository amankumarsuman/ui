import * as React from "react";

import { Paper } from "@mui/material";
import { Divider } from "@mui/material";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import "./varietyStyle.css";
import VarietyRight from "../varietyRight/VarietyRight";
export default function VarietyCard() {
  return (
    <>
      <div
        //  className="variety1"
        className="mainDiv"
      >
        <div className="variety1">
          <div className="para">
            <h4 className="pizzaHeading">
              Pizza is a savory dish of Italian origin
            </h4>
            <p className="pizzaPara">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry.
            </p>
            <Divider variant="middle" sx={{ border: "1px solid white" }} />

            <div className="explore">
              <p>Explore</p>
              <ArrowForwardIosOutlinedIcon
                sx={{ color: "white", marginTop: "15px", marginLeft: "30px" }}
              />
            </div>
          </div>
        </div>

        <Paper>
          <VarietyRight />
        </Paper>
      </div>
    </>
  );
}
