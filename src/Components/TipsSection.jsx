import React from "react";
import tipbox1img from "../SVGS/tipbox1img.svg";
import tipbox2img from "../SVGS/tipbox2img.svg";
const TipsSection = () => {
  return (
    <div className="tipssection" id="tips">
      <div className="tipdiv">
        <h1>TIPS FOR REDUCING WASTE</h1>
        <div className="tipbox1">
          <div className="tipbox1img">
            <img src={tipbox1img} alt="" />
          </div>
          <div className="tipbox1info">
            <h1>Material Life Cycle Assessment</h1>
            <p>
              When striving for waste reduction, it is crucial to adopt a
              comprehensive perspective through Material Life Cycle Assessment
              (MLCA). MLCA involves scrutinizing the entire life cycle of a
              product, from the extraction of raw materials and manufacturing
              processes to transportation, usage, and eventual disposal. This
              holistic approach ensures that efforts are not solely concentrated
              on reducing end-of-life waste but also encompass minimizing the
              ecological footprint throughout the entire production and
              consumption cycle.
            </p>
          </div>
        </div>
        <div className="tipbox2">
          <div className="tipbox2info">
            <h1>Extended Producer Responsibility (EPR)</h1>
            <p>
              EPR is a policy approach that mandates manufacturers to take
              responsibility for the entire life cycle of their products,
              including disposal. By shifting the burden of waste management
              back to the producer, EPR incentivizes companies to design
              products with recyclability and environmental impact in mind. This
              approach not only encourages sustainable production practices but
              also promotes the development of closed-loop systems, where
              products are designed for easy disassembly and recycling.
            </p>
          </div>
          <div className="tipbox2img">
            <img src={tipbox2img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TipsSection;
