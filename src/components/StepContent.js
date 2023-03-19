export default function StepContent(props) {
  return (
    <div className="single--card">
      {props.title ? (
        <div className="inner--container">
          <div>
            {props.icon && <img src={props.icon} alt={props.altText} />}
            <h5>{props.title}</h5>
          </div>
          <p>{props.description}</p>
        </div>
      ) : (
        <div className="add--card">
          <img src={props.icon} alt={props.altText} />
          <p>{props.description}</p>
        </div>
      )}
    </div>
  );
}
