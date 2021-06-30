import React from "react";
import Group187 from "../Group187";
import Frame53 from "../Frame53";
import Frame6 from "../Frame6";
import Frame7 from "../Frame7";
import "./Footer.css";

function Footer(props) {
  const {
    group86,
    mapPin1,
    text52,
    facebookAppSymbol,
    instagram,
    twitter,
    group187Props,
    group1872Props,
    frame53Props,
    frame6Props,
    frame7Props,
  } = props;

  return (
    <div className="footer">
      <div className="frame-1585">
        <div className="frame-1578">
          <img className="group-86-1" src={group86} />
          <div className="frame-1584">
            <div className="group-32">
              <div className="group-189">
                <img className="map-pin-1" src={mapPin1} />
                <p className="text-26 typographybody16-regular">{text52}</p>
              </div>
              <Group187 phone={group187Props.phone} text61={group187Props.text61} />
              <Group187 phone={group1872Props.phone} text61={group1872Props.text61} />
            </div>
            <div className="frame-1583">
              <img className="facebook-app-symbol" src={facebookAppSymbol} />
              <img className="frame-1583-item" src={instagram} />
              <img className="frame-1583-item" src={twitter} />
            </div>
          </div>
        </div>
        <Frame53 text40={frame53Props.text40} frame4Props={frame53Props.frame4Props} />
        <Frame6
          text48={frame6Props.text48}
          frame42Props={frame6Props.frame42Props}
          frame422Props={frame6Props.frame422Props}
        />
      </div>
      <Frame7 text56={frame7Props.text56} frame4Props={frame7Props.frame4Props} />
    </div>
  );
}

export default Footer;
