import eventLogo from "../assets/event-logo.png";

export default function Header() {
  return (
    <div className="header--container">
      <button className="btn">Edit Event</button>
      <div className="logo--details--container">
        <img src={eventLogo} alt="mountains and sun" />
        <div className="header--location--container">
          <h1>RainFocus Summit</h1>
          <p>December 15th</p>
          <p>Lehi, Utah</p>
        </div>
      </div>
      <h2>Event setup guide</h2>
      <p>
        See the available list of modules below. We suggest that you start with
        the attendee module.
      </p>
    </div>
  );
}
