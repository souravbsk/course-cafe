import React from "react";
import imgOne from '../../assets/sponserd/lg-1.png'
import imgTwo from '../../assets/sponserd/lg-5.png'
import imgThree from '../../assets/sponserd/lg-6.png'
import imgFour from '../../assets/sponserd/lg-7.png'
import imgFive from "../../assets/sponserd/lg-2.png"
import imgSix from '../../assets/sponserd/lg-3.png';
import imgSeven from '../../assets/sponserd/lg-4.png';
import imgEight from '../../assets/sponserd/lg-8.png';
import imgNine from '../../assets/sponserd/lg-9.png';

const TrustedBy = () => {
  return (
    <div className="container py-8 md:py-16">
      <div className="text-center max-w-full md:w-7/12 mx-auto space-y-3">
        <h2 className="text-xl md:text-3xl text-gray-700 font-bold">
        Trusted By <span className="text-gray-600">+25,000</span>
        </h2>
        <p className="text-base text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>
      </div>
      <div className="flex gap-12 flex-wrap justify-center mt-8">
        <a href="#"><img className="max-w-full w-36 object-cover h-7" src={imgOne} alt="" /></a>
        <a href="#"><img className="max-w-full w-32 h-7" src={imgTwo} alt="" /></a>
        <a href="#"><img className="max-w-full w-32 h-7" src={imgThree} alt="" /></a>
        <a href="#"><img className="max-w-full w-32 h-7" src={imgFour} alt="" /></a>
        <a href="#"><img className="max-w-full w-32 h-7" src={imgFive} alt="" /></a>
        <a href="#"><img className="max-w-full w-32 h-7" src={imgSix} alt="" /></a>
        <a href="#"><img className="max-w-full w-32 h-7" src={imgSeven} alt="" /></a>
        <a href="#"><img className="max-w-full w-32 h-7" src={imgEight} alt="" /></a>
        <a href="#"><img className="max-w-full w-32 h-7" src={imgNine} alt="" /></a>
      </div>
    </div>
  );
};

export default TrustedBy;
