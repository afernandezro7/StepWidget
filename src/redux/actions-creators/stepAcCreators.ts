import { Dispatch } from "redux"
import { doReset, StepAction, doInit, doNextStep, doBack } from '../actions/stepActions';
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

export const startNextStep = (validated:boolean) =>{
    return (dispatch:Dispatch<StepAction>)=> {
        dispatch(doNextStep(validated))
    }
}

export const startBackStep = () =>{
    return (dispatch:Dispatch<StepAction>)=> {
        dispatch(doBack())
    }
}

export const startCheckingValidation = (validationAcomplish:boolean) =>{
    return (dispatch:Dispatch<StepAction>)=> {
        dispatch(doReset())
    }
}