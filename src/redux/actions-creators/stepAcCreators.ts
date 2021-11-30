import { Dispatch } from "redux"
import { doReset, StepAction, doInit, doNextStep, doBack } from '../actions/stepActions';
import { Step } from "../interfaces/stepInterfaces"
import { State } from "../reducer";
// import { State } from "../reducer";


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


export const startCheckingValidation = () =>{
    return (dispatch:Dispatch<StepAction>, getState:() => State )=> {
        const { currentStep } = getState().step
        if(currentStep.validationRequired){
            
            dispatch(doNextStep(validated))

        }
    }
   
}

export const startNextStep = () =>{
    return (dispatch:Dispatch<StepAction>, getState:() => State)=> {
        const { currentStep } = getState().step
        dispatch(doNextStep(validated))
    }
}

export const startBackStep = () =>{
    return (dispatch:Dispatch<StepAction>)=> {
        dispatch(doBack())
    }
}
