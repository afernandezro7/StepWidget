

export const StepWrapper = () => {
    return (
        <div className="steps-container">
            <div className="steps-wrapper">
                <div className="steps-progressbar">
                    <div className="stepper-wrapper">
                        <div className="stepper-item active">
                            <div className="step-counter">&#10004;</div>
                            {/* <div className="step-name">First</div> */}
                            <div className="step-marker"></div>
                        </div>
                        <div className="stepper-item ">
                            <div className="step-counter">2</div>
                            {/* <div className="step-name">Second</div> */}
                            <div className="step-marker"></div>
                        </div>
                        <div className="stepper-item ">
                            <div className="step-counter">3</div>
                            {/* <div className="step-name">Third</div> */}
                            <div className="step-marker"></div>
                        </div>
                        
                    </div>

                </div>
                <div className="steps-content">

                </div>
            </div>
        </div>
    )
}
