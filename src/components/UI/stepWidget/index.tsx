import React from 'react'
import { StepsGroup } from './StepsGroup';
import { StepWrapper } from './StepWrapper';
import { CardHolder } from './CardHolder';
import { Step, StepStatus } from '../../../interfaces/stepWidget';
import { Card } from './Card';
import { ProductInformation } from './Views/ProductInformation';
import { Form as FormView } from './Views/Form';
import { FeedBack } from './Views/Feedback';

const steps:Step[] = [
    {
        title: "text 1",
        status: StepStatus.Active
    },
    {
        title: "text 2",
        status: StepStatus.Incomplete
    },
    {
        title: "text 3",
        status: StepStatus.Incomplete
    },
]

export const StepWidget = () => {
    return (

        <StepWrapper>
            <StepsGroup steps = {steps}/>
            <CardHolder>
                <Card>
                    <ProductInformation/>
                </Card>
                <Card>
                    <FormView/>
                </Card>
                <Card>
                    <FeedBack success={false}/>
                </Card>
            </CardHolder>
        </StepWrapper>
 
    )
}

export default StepWidget;