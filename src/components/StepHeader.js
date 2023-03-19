export default function StepHeader(props) {
  return (
    <>
      <p className="step--header">
        <strong>Step {props.number}: </strong>
        {props.title}
      </p>
    </>
  );
}
