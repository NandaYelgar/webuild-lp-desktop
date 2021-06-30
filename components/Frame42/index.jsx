import React from "react";
import "./Frame42.css";

function Frame42(props) {
  const { text49, text50, place, text51, text52, className } = props;

  return (
    <div className={`frame-4-1 ${className || ""}`}>
      <div className="text-38 valign-text-middle overpass-extra-bold-white-16px">{text49}</div>
      <div className="frame-1580">
        <div className="text-12 valign-text-middle typographybody16-regular">{text50}</div>
        <div className="place-3 valign-text-middle typographybody16-regular">{place}</div>
        <div className="text-40 valign-text-middle typographybody16-regular">{text51}</div>
        <div className="text-41 valign-text-middle typographybody16-regular">{text52}</div>
      </div>
    </div>
  );
}

export default Frame42;
