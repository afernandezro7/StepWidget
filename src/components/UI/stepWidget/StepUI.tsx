import { Step, StepStatus } from "../../../redux/interfaces/stepInterfaces"

interface Props {
    step: Step;
    number: number;
}

export const StepUI = ({step,number}:Props) => {
    return (
        <div className={`stepper-item ${step.status}`}>
            <div className="step-counter">{step.status === StepStatus.Completed ? <>&#10004;</> : number}</div>
            {/* <div className="step-name">First</div> */}
            <div className="step-marker"></div>
        </div>
    )
}
