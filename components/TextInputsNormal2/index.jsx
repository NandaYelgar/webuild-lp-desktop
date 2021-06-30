import React from "react";
import Frame117 from "../Frame117";
import "./TextInputsNormal2.css";

function TextInputsNormal2(props) {
  const { className, frame117Props } = props;

  return (
    <div className={`text-inputs-normal ${className || ""}`}>
      <Frame117 className={frame117Props.className}>{frame117Props.children}</Frame117>
    </div>
  );
}

export default TextInputsNormal2;
