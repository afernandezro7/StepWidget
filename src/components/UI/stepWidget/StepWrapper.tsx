

export const StepWrapper = () => {
    return (
        <div className="steps-container">
            <div className="steps-wrapper">
                <div className="steps-progressbar">
                    <div className="stepper-wrapper">
                        <div className="stepper-item completed">
                            <div className="step-counter">1</div>
                            <div className="step-name">First</div>
                        </div>
                        <div className="stepper-item active">
                            <div className="step-counter">2</div>
                            <div className="step-name">Second</div>
                        </div>
                        <div className="stepper-item">
                            <div className="step-counter">3</div>
                            <div className="step-name">Third</div>
                        </div>
                    </div>

                </div>
                <div className="steps-content">

                </div>
            </div>
        </div>
    )
}
