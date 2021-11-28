
import { StepActionType } from '../interfaces/stepInterfaces';

export type StepAction = 
| { type: StepActionType.NEXT, payload: { value: boolean; } }
| { type: StepActionType.BACK }
| { type: StepActionType.RESET };


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






