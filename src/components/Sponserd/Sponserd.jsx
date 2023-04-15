import React from "react";
import imgOne from '../../assets/sponserd/lg-1.png'
import imgTwo from '../../assets/sponserd/lg-5.png'
import imgThree from '../../assets/sponserd/lg-6.png'
import imgFour from '../../assets/sponserd/lg-7.png'

const Sponserd = () => {
  return (
    <div className="container -mt-14 shadow-md grid  lg:grid-cols-5 md:grid-cols-3 sm:grid-col-1 gap-3 bg-white rounded-md py-5 px-8">
      <div>
        <h3 className="text-xl font-semibold text-right">Over 700+ Cources In One Place</h3>
      </div>
      <div>
        <img className="w-48 h-11 mx-auto" src={imgOne} alt="" />
      </div>
      <div>
        <img className="w-48 h-11 mx-auto" src={imgTwo} alt="" />
      </div>
      <div>
        <img className="w-48 h-11 mx-auto" src={imgThree} alt="" />
      </div>
      <div>
        <img className="w-48 h-11 mx-auto" src={imgFour} alt="" />
      </div>
    </div>
  );
};

export default Sponserd;
