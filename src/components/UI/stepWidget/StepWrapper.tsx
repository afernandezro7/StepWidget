import { ReactElement } from "react"

export interface StepWrapperProps {
    children?: ReactElement | ReactElement[] 
}

export const StepWrapper = ({children}:StepWrapperProps) => {

    return (
        <div className="steps-container">
            <div className="steps-wrapper">
                {
                    children
                }
            </div>
        </div>
    )
}
