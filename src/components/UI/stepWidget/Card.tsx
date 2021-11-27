import { ReactElement } from "react"

export interface Props {
    children?: ReactElement | ReactElement[] 
}

export const Card = ({children}:Props) => {
    return (
        <div className="step-card">
            {
                children
            }
        </div>
    )
}
