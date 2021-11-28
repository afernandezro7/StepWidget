

export interface StepState {
    currentIndex: number;
    currentStep: Step;
    steps: Step[]
}

export interface Step {
    component: ()=>JSX.Element;
    validationRequired: boolean
}



export enum StepActionType {
    NEXT = 'next_step',
    RESET = 'reset',
    BACK = 'back'
}