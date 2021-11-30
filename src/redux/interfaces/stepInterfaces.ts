
export interface StepState {
    currentIndex: number;
    currentStep: Step;
    steps: Step[]
}
export interface Step{
    component: ()=>JSX.Element;
    title: string;
    status: StepStatus;
    feedBackNext?: any
}


export enum StepActionType {
    NEXT = 'next_step',
    FEEDBACK = 'set feedback to next component',
    RESET = 'reset',
    BACK = 'back',
    INIT = 'init'
}

export enum StepStatus {
    Completed = "completed",
    Active = "active",
    Incomplete = ""
}
