import { useState } from "react";
import EventNavs from "./EventNavs";
import eventLogoSmall from "../assets/event-logo.png";
import rainFocus from "../assets/rainfocus.png";
import hamburgerIcon from "../assets/icon-hamburger.svg";

export default function Sidebars() {
  const [isHidden, setIsHidden] = useState(true);

  function toggleNav() {
    setIsHidden((prevState) => !prevState);
    console.log(isHidden)
  }

  const navStyle = {
    display: isHidden ? "none" : "block",
  };

  return (
    <div className="navbar--container">
      <div className="account--nav">
        <div className="nav--logos--container">
          <button
            className="hamburger"
            style={{
              backgroundImage: `url(${hamburgerIcon})`,
              backgroundRepeat: "no-repeat",
              backgroundColor: "transparent",
            }}
            onClick={toggleNav}
          ></button>
          <img className="rf--logo" src={rainFocus} alt="red rf and 3 dots" />
          <img
            className="event--logo"
            src={eventLogoSmall}
            alt="mountains and sun"
          />
        </div>
        <div className="profile">FL</div>
      </div>
      <EventNavs version="desktop" />
      <EventNavs version="mobile" display={navStyle} toggleNav={toggleNav} />
    </div>
  );
}
