import React from "react";
import Group69 from "../Group69";
import Button82 from "../Button82";
import "./PackageCard.css";

function PackageCard(props) {
  const { text58, icons, overlapGroup1, standard, basic, group69Props, button82Props } = props;

  return (
    <div className="package-card">
      <div className="text-24 valign-text-middle typographyheadlineh4-extrabold-24">{text58}</div>
      <div className="icons" style={{ backgroundImage: `url(${icons})` }}>
        <div className="overlap-group1-3" style={{ backgroundImage: `url(${overlapGroup1})` }}>
          <img className="overlap-group1-item" src={standard} />
          <img className="overlap-group1-item" src={basic} />
        </div>
      </div>
      <Group69 number={group69Props.number} text4={group69Props.text4} />
      <Button82>{button82Props.children}</Button82>
    </div>
  );
}

export default PackageCard;
