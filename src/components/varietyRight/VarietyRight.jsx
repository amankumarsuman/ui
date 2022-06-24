import { Paper } from "@mui/material";
import React from "react";
import "./varietyRightStyle.css";
import { Divider } from "@mui/material";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
function VarietyRight() {
  return (
    <>
      <Paper sx={{ marginLeft: "50px" }} elevation={3}>
        <div className="frenchFry">
          <div className="paraContainer">
            <h4 className="frenchfryHeading">Crispy French Fries</h4>
            <p className="frenchfryPara">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <Divider
              variant="middle"
              sx={{ border: "1px solid black", width: "85%" }}
            />
            <div className="rate">
              <div className="frenchFryExplore">
                <h4>Explore</h4>
                <ArrowForwardIosOutlinedIcon
                  sx={{ marginTop: "10px", marginLeft: "30px" }}
                />
              </div>
              <div className="frenchFryExplore">
                <StarOutlineIcon
                  sx={{ marginLeft: "30px", fontSize: "50px" }}
                />
                <h4>Rate</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="frenchFry2">
          <div className="paraContainer">
            <h4 className="frenchfryHeading">Paneer Tikka</h4>
            <p className="frenchfryPara"></p>
            <Divider
              variant="middle"
              sx={{ border: "1px solid black", width: "85%" }}
            />
            <div className="rate">
              <div className="frenchFryExplore">
                <h4>Explore</h4>
                <ArrowForwardIosOutlinedIcon
                  sx={{ marginTop: "10px", marginLeft: "30px" }}
                />
              </div>
              <div className="frenchFryExplore">
                <StarOutlineIcon
                  sx={{ marginLeft: "30px", fontSize: "50px" }}
                />
                <h4>Rate</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="frenchFry3">
          <div className="paraContainerMacaroon">
            <h4 className="frenchfryHeading">Macaroon</h4>
            <p className="frenchfryPara">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <Divider
              variant="middle"
              sx={{ border: "1px solid black", width: "85%" }}
            />
            <div className="rate">
              <div className="frenchFryExplore">
                <h4>Explore</h4>
                <ArrowForwardIosOutlinedIcon
                  sx={{ marginTop: "10px", marginLeft: "30px" }}
                />
              </div>
              <div className="frenchFryExplore">
                <StarOutlineIcon
                  sx={{ marginLeft: "30px", fontSize: "50px" }}
                />
                <h4>Rate</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="frenchFry4">
          <div className="paraContainer">
            <h4 className="frenchfryHeading">Doughnut</h4>
            <p className="frenchfryPara">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <Divider
              variant="middle"
              sx={{ border: "1px solid black", width: "85%" }}
            />
            <div className="rate">
              <div className="frenchFryExplore">
                <h4>Explore</h4>
                <ArrowForwardIosOutlinedIcon
                  sx={{ marginTop: "10px", marginLeft: "30px" }}
                />
              </div>
              <div className="frenchFryExplore">
                <StarOutlineIcon
                  sx={{ marginLeft: "30px", fontSize: "50px" }}
                />
                <h4>Rate</h4>
              </div>
            </div>
          </div>
        </div>
      </Paper>
    </>
  );
}

export default VarietyRight;
