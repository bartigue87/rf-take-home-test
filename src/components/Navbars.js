import NavItem from "./NavItem";
import eventLogoSmall from "../assets/event-logo.png";
import rainFocus from "../assets/rainfocus.png";
import glass from "../assets/mag-glass.png";

export default function Navbars() {
  return (
    <div className="navbar--container">
      <div className="account--nav">
        <div className="nav--logos--container">
          <img className="rf--logo" src={rainFocus} alt="red rf and 3 dots" />
          <img
            className="event--logo"
            src={eventLogoSmall}
            alt="mountains and sun"
          />
        </div>
        <div className="profile">FL</div>
      </div>
      <div className="event--nav">
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
