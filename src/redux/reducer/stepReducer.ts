import { StepAction } from "../actions/stepActions";
import { Step, StepActionType, StepState, StepStatus } from '../interfaces/stepInterfaces';
import { Loading } from "../../components/UI/Loading";

const loadingComponent:Step = {
    component: Loading,
    status:StepStatus.Active,
    title: 'Loading'
}

const init:StepState = {
    currentIndex: 0,
    currentStep: loadingComponent,
    steps:[loadingComponent]
}

export const stepReducer = ( state:StepState=init, action:StepAction ) : StepState=> {
    switch (action.type) {
        case StepActionType.INIT:
            const initSteps = changeTagStatus(action.payload.value,0)
            return {
                ...state,
                currentIndex: 0,
                currentStep: initSteps[0], 
                steps: initSteps           
            }
        case StepActionType.BACK:
            const prevIndex = state.currentIndex>0 ? state.currentIndex -1 : 0
            const backSteps = changeTagStatus(state.steps,prevIndex)
            return {
                ...state,
                currentIndex: prevIndex,
                currentStep: backSteps[prevIndex], 
                steps: backSteps            
            }
        case StepActionType.NEXT:
            const nextIndex = state.steps.length-1 === state.currentIndex ? state.currentIndex : state.currentIndex +1
            const steps = changeTagStatus(state.steps,nextIndex)
            
            return {
                ...state,
                currentIndex: nextIndex,
                currentStep: steps[nextIndex],
                steps
            }
        case StepActionType.FEEDBACK:   
            const newSteps = setFeedbak(state.currentIndex+1,action.payload.value,state.steps)     
            return {
                ...state,
                steps: newSteps
            }
        case StepActionType.RESET:

            const resetSteps = changeTagStatus(state.steps,0)
            return {
                ...state,
                currentIndex: 0,
                currentStep: resetSteps[0],
                steps: resetSteps  
            }
    
        default:
            return {
                ...state
            };
    }
}


const changeTagStatus = (steps:Step[], nextIndex:number): Step[] => {

    return steps.map(( step, i ) => {
        
        if(nextIndex > i ){          
            return {
                ...step,
                status: StepStatus.Completed
            }
        }else if(nextIndex === i){
            return {
                ...step,
                status: StepStatus.Active
            }
        }else{
            return {
                ...step,
                status: StepStatus.Incomplete
            }

        }
    })
}

const setFeedbak = (nextIndex:number,value:any, steps:Step[]): Step[] => {


    return steps.map( (step,i) => {
        if(nextIndex === i) {
            return{
                ...step,
                feedBackNext: value
            }
        }
        return step
    })
}