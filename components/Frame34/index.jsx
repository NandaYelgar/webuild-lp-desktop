import React from "react";
import Frame2722 from "../Frame2722";
import GetAQuoteButton222 from "../GetAQuoteButton222";
import "./Frame34.css";

function Frame34(props) {
  const { frame2722Props, getAQuoteButton222Props } = props;

  return (
    <div className="frame-34">
      <Frame2722 {...frame2722Props} />
      <GetAQuoteButton222>{getAQuoteButton222Props.children}</GetAQuoteButton222>
    </div>
  );
}

export default Frame34;
