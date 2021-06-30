import React from "react";
import Frame34 from "../Frame34";
import "./HeaderWithBackground.css";

function HeaderWithBackground(props) {
  const { group86, frame34Props } = props;

  return (
    <div className="header-with-background">
      <img className="group-86" src={group86} />
      <Frame34
        frame2722Props={frame34Props.frame2722Props}
        getAQuoteButton222Props={frame34Props.getAQuoteButton222Props}
      />
    </div>
  );
}

export default HeaderWithBackground;
