import { Dispatch } from "redux"
import { doReset, StepAction, doInit, doNextStep, doBack, doFeedback } from '../actions/stepActions';
import { Step } from "../interfaces/stepInterfaces"


export const startChecking = (steps:Step[]) =>{
    return (dispatch:Dispatch<StepAction>)=> {
        dispatch(doInit(steps))
    }
}

export const startReset = () =>{
    return (dispatch:Dispatch<StepAction>)=> {
        dispatch(doReset())
    }
}

export const startNextStep = () =>{
    return (dispatch:Dispatch<StepAction>)=> {
        dispatch(doNextStep())
    }
}

export const startBackStep = () =>{
    return (dispatch:Dispatch<StepAction>)=> {
        dispatch(doBack())
    }
}
export const startFeedbackNextComponent = (value:any) =>{
    return (dispatch:Dispatch<StepAction>)=> {
        dispatch(doFeedback(value))
    }
}
