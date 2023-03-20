import NavItem from "./NavItem";
import closeIcon from "../assets/icon-close.svg";
import glass from "../assets/mag-glass.png";

export default function EventNavs(props) {

  return (
    <div className={`event--nav ${props.version}`} style={props.display}>
      <button
        className="icon"
        style={{
          backgroundImage: `url(${closeIcon})`,
          backgroundRepeat: "no-repeat",
          backgroundColor: "transparent",
        }}
        onClick={props.toggleNav}
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
  );
}
