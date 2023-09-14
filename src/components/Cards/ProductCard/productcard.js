import React from "react";

import imagePlaceholder from '../../../assets/PNG/IMAGE.png'

function  Productcard({data}) {
  console.log(data)
  // const title = "cccc"
  const { title, icon } = data;
  return (
    <div  className="card col-lg-3 mx-3  border border-white">
      <img
        className="card-img-top bg-secondary opacity-25"
        src={imagePlaceholder}
        height="100px"
        alt="Card cap"
      />
      <div className="card-body p-0" style={{ height:"12rem"}}>
        <h5 className="card-title fw-bold" style={{fontSize:"13px"}}>{title}</h5>
        <div className="card-text fw-bold" style={{fontSize:"12px"}}>$18.50</div>
        <div className="text-secondary" style={{fontSize:"10px"}}>Time left</div>
        <div className="text-danger fw-bold" style={{fontSize:"10px"}}>6d 13h 52 sec</div>
        <div className="text-secondary" style={{fontSize:"10px"}}>5 bids</div>
        <div className="text-secondary" style={{fontSize:"10px"}}>+$11.60 shidping</div>
      </div>
    </div>
  );
}

export default Productcard;
