import { useRef } from "react";
import NavItem from "./NavItem"
import eventLogoSmall from "../assets/event-logo.png";
import rainFocus from "../assets/rainfocus.png";
import hamburgerIcon from "../assets/icon-hamburger.svg";
import closeIcon from "../assets/icon-close.svg";
import glass from "../assets/mag-glass.png";

export default function Sidebars() {
  const navRef = useRef()

  function showNav() {
    navRef.current.classList.toggle("mobile-nav")
  }

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
            onClick={showNav}
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
      <div className="event--nav" ref={navRef}>
      <button
        className="icon"
        style={{
          backgroundImage: `url(${closeIcon})`,
          backgroundRepeat: "no-repeat",
          backgroundColor: "transparent",
        }}
        onClick={showNav}
      ></button>
      <p className="event--nav--title">RainFocus Summit</p>
      <p className="location--date">
        Lehi, UT <span>• </span>
        <span>December 15th</span>
      </p>
      <div className="searchbar">
        <img src={glass} alt="magnifying glass" />
        <input placeholder="Search" />
      </div>
      <NavItem title="Guide" status="inactive" />
      <NavItem
        title="Atendees"
        status="active"
        items={[
          "Atendees",
          "Atendee types",
          "Packages",
          "Reg codes",
          "Discounts",
        ]}
      />
      <NavItem title="Content" status="inactive" />
      <NavItem title="Exhibitors" status="inactive" />
    </div>
    </div>
  );
}
