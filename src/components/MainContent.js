import StepHeader from "./StepHeader";
import StepContent from "./StepContent";
import personIcon from "../assets/person.png";
import arrowIcon from "../assets/arrow.svg";
import plusIcon from "../assets/plus.svg";
import computerIcon from "../assets/computer.svg";

export default function MainContent() {
  return (
    <div>
      <div className="main--content--header">
        <img src={personIcon} alt="person outline" />
        <h3>Attendee</h3>
      </div>
      <StepHeader number={1} title="Base settings." />
      <div className="step1">
        <StepContent
          title="General"
          description="Define Attendee types & attributes"
        />
        <StepContent
          title="Title"
          description="Description that explains the value goes here. Description that explains the value goes here."
        />
        <StepContent
          title="Title"
          description="Description that explains the value goes here. Description that explains the value goes here."
        />
      </div>
      <StepHeader number={2} title="Build registration and workflows." />
      <div className="step2 step--split">
        <StepContent
          icon={arrowIcon}
          altText="arrow"
          title="Atendee Registration"
          description="Start by creating a general registration workflow"
        />
        <StepContent
          icon={arrowIcon}
          altText="arrow"
          title="Atendee Registration"
          description="Start by creating a general registration workflow"
        />
        <StepContent
          icon={arrowIcon}
          altText="arrow"
          title="Atendee Registration"
          description="Start by creating a general registration workflow"
        />
        <StepContent
          icon={plusIcon}
          altText="plus"
          description="Add Registration Workflow"
        />
      </div>
      <StepHeader number={3} title="Design post-registration experience." />
      <div className="step3 step--split">
        <StepContent
          icon={computerIcon}
          altText="computer"
          title="Atendee Portal"
          description="Manage the portal that attendess will see after they've register for your event."
        />
      </div>
    </div>
  );
}
