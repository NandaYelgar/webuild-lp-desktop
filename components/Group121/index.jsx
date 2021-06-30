import React from "react";
import "./Group121.css";

function Group121(props) {
  const { text80, ellipse1, name, text81, className } = props;

  return (
    <div className={`testimonial-card ${className || ""}`}>
      <div className="overlap-group-1">
        <p className="text-5-1 typographybodycaption-14-semi-bold">{text80}</p>
        <div className="group-120">
          <img className="ellipse-1" src={ellipse1} />
          <div className="flex-col-1">
            <div className="name valign-text-middle typographyheadlineh3-extrabold-30">{name}</div>
            <div className="text-5-2 valign-text-middle typographybody16-regular">{text81}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Group121;
