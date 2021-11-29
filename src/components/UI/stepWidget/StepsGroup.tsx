import { StepUI } from './StepUI'
import { Step } from '../../../redux/interfaces/stepInterfaces';



export const StepsGroup = ({steps}:{steps:Step[]}) => {

    return (
        <div className="steps-progressbar">
            <div className="stepper-wrapper">
                {
                    steps.map((step, i) => (
                        <StepUI
                            key={step.title}
                            number={i + 1}
                            step={step}
                        />

                    ))

                }
            </div>

        </div>
    )
}
