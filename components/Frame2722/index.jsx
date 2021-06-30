import React from "react";
import "./Frame2722.css";

function Frame2722(props) {
  const {
    place,
    unselectedI2601234,
    projects,
    unselectedI26012342,
    unselectedI26012343,
    unselectedI26012344,
    unselectedI26012345,
    unselectedI26012346,
  } = props;

  return (
    <div className="frame-27">
      <div className="selected">
        <div className="overlap-group1-4">
          <div className="rectangle-61"></div>
          <div className="place-2 valign-text-middle overpass-bold-shark-14px">{place}</div>
        </div>
      </div>
      <div className="unselected-i2601234 valign-text-middle typography-body-smalltext-14-regular">
        {unselectedI2601234}
      </div>
      <img className="projects" src={projects} />
      <div className="unselected-i2601234-1 valign-text-middle typography-body-smalltext-14-regular">
        {unselectedI26012342}
      </div>
      <div className="unselected-i2601234-2 valign-text-middle typography-body-smalltext-14-regular">
        {unselectedI26012343}
      </div>
      <div className="unselected-i2601234-3 valign-text-middle typography-body-smalltext-14-regular">
        {unselectedI26012344}
      </div>
      <div className="unselected-i2601234-4 valign-text-middle typography-body-smalltext-14-regular">
        {unselectedI26012345}
      </div>
      <div className="unselected-i2601234-5 valign-text-middle typography-body-smalltext-14-regular">
        {unselectedI26012346}
      </div>
    </div>
  );
}

export default Frame2722;
