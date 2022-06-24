import React from "react";
import "./foodguideStyle.css";
function FoodGuideCustomComponent({ img, heading, paragraph, alt }) {
  return (
    <>
      <div className="vegetable">
        <img className="vegImg" src={img} alt={alt} />
      </div>
      <h1 className="vegetableDiv">{heading}</h1>
      <p className="vegetablePara">{paragraph}</p>
    </>
  );
}

export default FoodGuideCustomComponent;
