import { Divider, Grid } from "@mui/material";
import React from "react";
import FoodGuideCustomComponent from "./FoodGuideCustomComponent";
import "./foodguideStyle.css";
function FoodGuide() {
  return (
    <>
      <div className="foodguideBanner">
        <div className="foodGuideDiv">
          <h1>Food Guide</h1>
          <Divider
            sx={{
              border: "2px solid #342679",
              width: "150px",
              margin: "auto",
              marginTop: "10px",
            }}
            variant="middle"
          />
        </div>
        <div className="foodGuideContainer">
          <Grid container justifyContent="space-between" spacing={2}>
            <Grid item xs={2}></Grid>
            <Grid sx={{ textAlign: "center" }} item xs={2}>
              <FoodGuideCustomComponent
                img={"./vegetable.png"}
                alt="vegetable"
                heading="VEGETABLES"
                paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard."
              />
            </Grid>

            <Grid item xs={2}></Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={2}>
              <FoodGuideCustomComponent
                img={"./grain.png"}
                alt="grains"
                heading="WHOLE GRAINS"
                paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting
                industry."
              />
            </Grid>
          </Grid>
          <Grid
            container
            justifyContent="space-between"
            sx={{ marginTop: "380px" }}
            spacing={2}
          >
            <Grid item xs={2}></Grid>
            <Grid sx={{ textAlign: "center" }} item xs={2}>
              <FoodGuideCustomComponent
                img={"./fruits.png"}
                alt="fruits"
                heading="FRUITS"
                paragraph=" Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's."
              />
            </Grid>

            <Grid item xs={2}></Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={2}>
              <FoodGuideCustomComponent
                img={"./protein.png"}
                alt="protein"
                heading="HEALTHY PROTEIN"
                paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard."
              />
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
}

export default FoodGuide;
