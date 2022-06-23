import { Grid } from "@mui/material";
import React from "react";
import "./foodguideStyle.css";
function FoodGuide() {
  return (
    <>
      <div className="foodguideBanner">
        <Grid sx={{ border: "1px solid red" }} container spacing={2}>
          <Grid item sx={4}>
            <div className="vegetable">
              <img className="vegImg" src="./vegetable.png" alt="vegetable" />
            </div>
          </Grid>
          <Grid item sx={4}></Grid>
          <Grid item sx={4}>
            <div className="vegetable">
              <img className="vegImg" src="./vegetable.png" alt="vegetable" />
            </div>
          </Grid>
        </Grid>
        {/* <Grid sx={{ paddingTop: "50px" }} container spacing={2}>
          <Grid item xs={4}>
            <div className="johnsonPic">
              <img className="johnson" src="./johnson.png" alt="" />
            </div>
            <h1 className="johnsonText">Eileen Johnson</h1>
            <p className="johnsonPara">Executive Chef, USA</p>
          </Grid>
          <Grid item xs={4}>
            <Paper sx={{ paddingBottom: "80px" }} elevation={3}>
              <div className="johnsonPic">
                <img className="robert" src="./robert.png" alt="" />
              </div>
              <h1 className="robertText">Robert Downey Jr</h1>
              <p className="robertPara">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <div className="johnsonPic">
              <img className="johnson" src="./johnson.png" alt="" />
            </div>
            <h1 className="johnsonText">Amanda Dority</h1>
            <p className="johnsonPara">Sous Chef, India</p>
          </Grid>
        </Grid> */}
      </div>
    </>
  );
}

export default FoodGuide;
