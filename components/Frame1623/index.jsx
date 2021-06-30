import React from "react";
import GetAQuoteButton22 from "../GetAQuoteButton22";
import "./Frame1623.css";

function Frame1623(props) {
  const { spanText, spanText2, spanText3, text36, getAQuoteButton22Props } = props;

  return (
    <div className="frame-16">
      <div className="text-1 valign-text-middle overpass-semi-bold-white-32px-2 animate-enter1">
        <span>
          <span className="span0 overpass-semi-bold-white-32px">{spanText}</span>
          <span className="span1 overpass-semi-bold-white-32px">{spanText2}</span>
          <span className="span2 ">{spanText3}</span>
        </span>
      </div>
      <p className="text-2 typographybody16-regular">{text36}</p>
      <GetAQuoteButton22>{getAQuoteButton22Props.children}</GetAQuoteButton22>
    </div>
  );
}

export default Frame1623;
