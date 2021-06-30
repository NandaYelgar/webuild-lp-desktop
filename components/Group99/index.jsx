import React from "react";
import "./Group99.css";

function Group99(props) {
  const { text1, surname } = props;

  return (
    <div className="group-99">
      <div className="text-1-1 valign-text-middle typographyheadlineh4-extrabold-24">{text1}</div>
      <p className="surname typography-body-smalltext-14-regular">{surname}</p>
    </div>
  );
}

export default Group99;
