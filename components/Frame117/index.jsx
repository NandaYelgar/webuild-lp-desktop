import React from "react";
import "./Frame117.css";

function Frame117(props) {
  const { children, className } = props;

  return (
    <div className={`frame-1-1-1 border-1px-white ${className || ""}`}>
      <div className="text-59 inter-normal-white-14px">{children}</div>
    </div>
  );
}

export default Frame117;
