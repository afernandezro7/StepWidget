
import { Step, StepActionType } from '../interfaces/stepInterfaces';

export type StepAction = 
| { type: StepActionType.INIT , payload: {value: Step[]}}
| { type: StepActionType.NEXT, payload: { value: boolean; } }
| { type: StepActionType.BACK }
| { type: StepActionType.RESET };


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

export const doNextStep = ( value: boolean ): StepAction => ({
    type: StepActionType.NEXT,
    payload: { value }
})






