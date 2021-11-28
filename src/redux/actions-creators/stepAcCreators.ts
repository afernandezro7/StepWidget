import { Dispatch } from "redux"
import { doReset, StepAction } from "../actions/stepActions"
import { Step } from "../interfaces/stepInterfaces"


export const startChecking = (steps:Step[]) =>{
    return (dispatch:Dispatch<StepAction>)=> {
        dispatch(doReset())
    }
}

export const startCheckingValidation = (validationAcomplish:boolean) =>{
    return (dispatch:Dispatch<StepAction>)=> {
        dispatch(doReset())
    }
}