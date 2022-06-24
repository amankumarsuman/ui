import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Paper } from "@mui/material";
import { Divider } from "@mui/material";
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import "./varietyStyle.css"
export default function VarietyCard() {
  return (
    <>
      <div
      //  className="variety1"
      >
        <div 
       className="variety1"
        
        >
          <div className="para">

          <h4 style={{fontSize:"50px",color:"white",paddingTop:"50px" }}>
            Pizza is a savory dish of Italian origin
          </h4>
          <p style={{color:"white",fontSize:"30px",paddingTop:"20px"}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry.
          </p>
          <Divider variant="middle" sx={{border :"1px solid white"}} />

          <div className="explore">
            <p>Explore</p>
          <ArrowForwardIosOutlinedIcon sx={{color:"white",marginTop:"15px",marginLeft:"30px"}}/>
             </div>
          </div>
        
        </div>
      
       
      
      </div>
    </>
  );
}
