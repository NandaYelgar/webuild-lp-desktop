import React from "react";
import Group69 from "../Group69";
import Button82 from "../Button82";
import "./Group111.css";

function Group111(props) {
  const { basicI2601231166, icons, group69Props, button8Props } = props;

  return (
    <div className="group-11">
      <div className="basic-i2601231 valign-text-middle typographyheadlineh4-extrabold-24">{basicI2601231166}</div>
      <img className="icons-1" src={icons} />
      <Group69 number={group69Props.number} text4={group69Props.text4} />
      <Button82>{button8Props.children}</Button82>
    </div>
  );
}

export default Group111;
