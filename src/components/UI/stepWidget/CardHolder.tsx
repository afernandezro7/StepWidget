import { ReactElement } from "react"

export interface Props {
    children?: ReactElement | ReactElement[] 
}

export const CardHolder = ({children}:Props) => {
    return (
        <div className="steps-content">
            {
                children
            }
        </div>
    )
}
