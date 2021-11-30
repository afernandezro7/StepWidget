import { CardButtonsProps } from "../../components/UI/stepWidget/Card";

export interface StepState {
    currentIndex: number;
    currentStep: Step;
    steps: Step[]
}
export interface Step {
    component: ()=>JSX.Element;
    validationRequired: boolean
    beforeNext?: (value: any) => Promise<boolean> | ((value: any )=> boolean)
    title: string;
    status: StepStatus;
    buttons?: CardButtonsProps
}


export enum StepActionType {
    NEXT = 'next_step',
    VALIDATE_OK = 'success validation',
    VALIDATE_FAIL = 'Fail validation',
    RESET = 'reset',
    BACK = 'back',
    INIT = 'init'
}

export enum StepStatus {
    Completed = "completed",
    Active = "active",
    Incomplete = ""
}
