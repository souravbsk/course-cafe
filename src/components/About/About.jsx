import React from "react";
import IntructorLeft from "../IntructorLeft/IntructorLeft";
import TrustedBy from "../TrustedBy/TrustedBy";
import Reviews from "../Reviews/Reviews";

const About = () => {
  return (
    <div>
      <div className="container mt-24">
        <IntructorLeft></IntructorLeft>
      </div>
      <TrustedBy></TrustedBy>
      <Reviews></Reviews>
    </div>
  );
};

export default About;
