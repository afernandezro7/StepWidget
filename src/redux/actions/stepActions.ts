
import { Step, StepActionType } from '../interfaces/stepInterfaces';

export type StepAction = 
| { type: StepActionType.INIT , payload: {value: Step[]}}
| { type: StepActionType.NEXT }
| { type: StepActionType.BACK }
| { type: StepActionType.RESET }
| { type: StepActionType.FEEDBACK, payload: {value: any}}



export const doInit = (steps:Step[]):StepAction => ({
    type: StepActionType.INIT,
    payload: {value:steps}
})
export const doReset = ():StepAction => ({
    type: StepActionType.RESET
})

export const doBack = ():StepAction => ({
    type: StepActionType.BACK
})

export const doNextStep = (): StepAction => ({
    type: StepActionType.NEXT
})

export const doFeedback= (value:any): StepAction => ({
    type: StepActionType.FEEDBACK,
    payload: {value}
})






