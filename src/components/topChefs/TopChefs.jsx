import { Grid, Paper } from "@mui/material";
import React from "react";
import "./chefStyle.css";
function TopChefs() {
  return (
    <>
      <div style={{ maxWidth: "1280px" }}>
        <div className="chefsBanner">
          <div style={{ width: "70%", margin: "auto", marginTop: "50px" }}>
            <Grid sx={{ paddingTop: "50px" }} container spacing={2}>
              <Grid item xs={4}>
                <div className="johnsonPic">
                  <img className="johnson" src="./johnson.png" alt="" />
                </div>
                <h1 className="johnsonText">Eileen Johnson</h1>
                <p className="johnsonPara">Executive Chef, USA</p>
              </Grid>
              <Grid item xs={4}>
                <Paper
                  sx={{
                    paddingBottom: "80px",
                    height: 350,
                    width: 700,
                    borderRadius: "20px",
                  }}
                  elevation={3}
                >
                  <div className="johnsonPic">
                    <img className="robert" src="./robert.png" alt="" />
                  </div>
                  <h1 className="robertText">Robert Downey Jr</h1>
                  <p className="robertPara">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
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
            </Grid>
          </div>
        </div>
      </div>
    </>
  );
}

export default TopChefs;
