import { StepAction } from "../actions/stepActions";
import { StepActionType, StepState } from '../interfaces/stepInterfaces';
import { Loading } from "../../components/UI/Loading";

const init:StepState = {
    currentIndex: 0,
    currentStep: {
        component: Loading,
        validationRequired: false
    },
    steps:[{
        component:Loading,
        validationRequired:false
    }]
}

export const stepReducer = ( state:StepState=init, action:StepAction ) : StepState=> {
    switch (action.type) {
        case StepActionType.BACK:
            const prevIndex = state.currentIndex>0 ? state.currentIndex -1 : 0
            return {
                ...state,
                currentIndex: prevIndex,
                currentStep: state.steps[prevIndex],             
            }
        case StepActionType.NEXT:
            const nextIndex = state.steps.length-1 === state.currentIndex ? state.currentIndex : state.currentIndex +1
            return {
                ...state,
                currentIndex: nextIndex,
                currentStep: state.steps[nextIndex],  
            }
        case StepActionType.RESET:
            return {
                ...state,
                currentIndex: 0,
                currentStep: state.steps[0],  
            }
    
        default:
            return {
                ...state
            };
    }
}
