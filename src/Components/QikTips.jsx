import React from "react";
import treeicon from "../SVGS/treeicon.svg";
import treesicon from "../SVGS/treesicon.svg";
import recycleicon from "../SVGS/recycleicon.svg";
const QikTips = () => {
  return (
    <div className="qiktips" id="qiktips">
      <div className="qt1">
        <img src={treeicon} alt="" className="icon" />
        <h1>SAVE TREE TO SAVE MONEY</h1>
        <h3>Embrace a paperless approach for cost and Eco-friendly benefits</h3>
      </div>
      <div className="qt2">
        <img src={recycleicon} alt="" className="icon" />
        <h1>Think Clean Go Green</h1>
        <h3> An Eco-Conscious mantra for a sustainable future.</h3>
      </div>
      <div className="qt3">
        <img src={treesicon} alt="" className="icon" />
        <h1>Save the Planet By Recycling</h1>
        <h3>Act with a profound impact on environmental conservation.</h3>
      </div>
    </div>
  );
};

export default QikTips;
