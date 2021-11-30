import { ReactElement } from "react"
import { bindActionCreators } from "redux"
import { useDispatch } from 'react-redux';
import { actionCreators } from "../../../redux";
export interface CardButtonsProps {
    backButtonName:        string;
    backButtonClassName:   string
    nextButtonName:        string
    nextButtonClassName:   string;
    lastButtonName:        string;
    lastButtonClassName:   string
    lastCallBack:          null | (()=>void); 
}
export interface Props extends CardButtonsProps {
    children?:              ReactElement | ReactElement[];
}

export const Card = ({
    children,
    backButtonName, 
    backButtonClassName, 
    nextButtonName, 
    nextButtonClassName,
    lastCallBack, 
    lastButtonName, 
    lastButtonClassName
    }:Props) => 
{

    const dispatch = useDispatch()
    const { startNextStep, startBackStep, startCheckingValidation } = bindActionCreators(actionCreators,dispatch)

    const handleNextButton = () => {
        startCheckingValidation()
        startNextStep()
    }
    const handleBackButton = () => {
        startBackStep()
    }

    return (
        <div className="step-card">
            {
                children
            }
            {
                lastCallBack === null
                ? <>
                    {
                        !!backButtonName && <button onClick={ handleBackButton } className={backButtonClassName}>{backButtonName}</button>
                    }
                    {

                        !!nextButtonName && <button onClick={ handleNextButton} className={nextButtonClassName}>{nextButtonName}</button>
                    }
                  </>
                :<button onClick={lastCallBack} className={lastButtonClassName}>{lastButtonName}</button>
            }
            
        </div>
    )
}
