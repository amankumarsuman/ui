import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Paper } from "@mui/material";

export default function VarietyCard() {
  return (
    <>
      <Card
        style={{
          maxWidth: "600px",
          height: "600px",
          // top: 107.04,
          // left: 72.68,
        }}
      >
        <div style={{ backgroundImage: "url('./variety1.png')" }}>
          {/* <Paper elevation={3}> */}
          <h4 style={{ paddingTop: "300px" }}>
            Pizza is a savory dish of Italian origin
          </h4>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry.
          </p>
          {/* </Paper> */}
        </div>
        {/* //Pizza is a savory dish of Italian origin Lorem Ipsum is simply dummy
        text of the printing and typesetting industry. Lorem Ipsum has been the
        industry. */}
        {/* <CardMedia
          component="img"
          height="140"
          image="https://static.toiimg.com/photo/msid-87930581/87930581.jpg?211826"
          alt="green iguana"
        /> */}
        {/* <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent> */}
      </Card>
    </>
  );
}
