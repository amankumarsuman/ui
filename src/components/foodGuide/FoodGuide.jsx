import { Divider, Grid, Typography } from "@mui/material";
import React from "react";
import "./foodguideStyle.css";
function FoodGuide() {
  return (
    <>
      <div className="foodguideBanner">
        <div style={{paddingTop:"100px",width:"200px",margin:"auto"}} >

        <h1 >Food Guide</h1>
        <Divider sx={{border:"3px solid #342679",width:"100px",margin:"auto",marginTop:"10px"}} variant="middle" />
        </div>
        <div className="foodGuideContainer">
        <Grid  container justifyContent="space-between" spacing={2}>
          <Grid item xs={2} >
           
          </Grid>
          <Grid sx={{textAlign:"center"}} item xs={2}>
        
          <div className="vegetable">
              <img className="vegImg" src="./vegetable.png" alt="vegetable" />
            </div>
            <h1 style={{marginTop:"30px",marginLeft:"-280px",fontSize:"50px"}}>Vegetables</h1>
<p style={{marginLeft:"-200px",color:"black",fontWeight:700,marginTop:"20px"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
          </Grid>
          
          <Grid item xs={2}>
            
          </Grid>
          <Grid item xs={2}></Grid>
          <Grid item xs={2}></Grid>
          <Grid  item xs={2}>
            <div  className="vegetable">
              <img className="vegImg" src="./grain.png" alt="vegetable" />
            </div>
            <h1 style={{marginTop:"30px",marginLeft:"-280px",fontSize:"50px"}}>WHOLE GRAINS</h1>
<p style={{marginLeft:"-200px",color:"black",fontWeight:700,marginTop:"20px"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </Grid>
        </Grid>
        <Grid  container justifyContent="space-between" sx={{marginTop:"380px"}} spacing={2}>
          <Grid item xs={2} >
           
          </Grid>
          <Grid sx={{textAlign:"center"}} item xs={2}>
        
          <div className="vegetable">
              <img className="vegImg" src="./fruits.png" alt="vegetable" />
            </div>
            <h1 style={{marginTop:"30px",marginLeft:"-280px",fontSize:"50px"}}>FRUITS</h1>
<p style={{marginLeft:"-200px",color:"black",fontWeight:700,marginTop:"20px"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>
          </Grid>
          
          <Grid item xs={2}>
            
          </Grid>
          <Grid item xs={2}></Grid>
          <Grid item xs={2}></Grid>
          <Grid  item xs={2}>
            <div  className="vegetable">
              <img className="vegImg" src="./protein.png" alt="vegetable" />
            </div>
            <h1 style={{marginTop:"30px",marginLeft:"-280px",fontSize:"50px"}}>HEALTHY PROTEIN</h1>
<p style={{marginLeft:"-200px",color:"black",fontWeight:700,marginTop:"20px"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..</p>
          </Grid>
        </Grid>
        </div>
        
     
      </div>
    </>
  );
}

export default FoodGuide;
