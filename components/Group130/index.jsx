import React from "react";
import Frame1623 from "../Frame1623";
import "./Group130.css";

function Group130(props) {
  const { rectangle2, getAQuoteButton2Props } = props;

  return (
    <div className="group-130">
      <div className="overlap-group1">
        <div className="group-37">
          <div className="overlap-group2">
            <img className="rectangle-2 animate-enter" src={rectangle2} />
            <Frame1623
              spanText={getAQuoteButton2Props.spanText}
              spanText2={getAQuoteButton2Props.spanText2}
              spanText3={getAQuoteButton2Props.spanText3}
              text36={getAQuoteButton2Props.text36}
              getAQuoteButton22Props={getAQuoteButton2Props.getAQuoteButton22Props}
            />
          </div>
        </div>
        <div className="header"></div>
      </div>
    </div>
  );
}

export default Group130;
