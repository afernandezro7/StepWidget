export enum StepStatus {
    Completed = "completed",
    Active = "active",
    Incomplete = ""
}

export interface Step {
    title: string;
    status: StepStatus
}