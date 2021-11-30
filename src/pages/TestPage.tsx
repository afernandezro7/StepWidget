import React from 'react'
import { StepWidget } from '../components/UI/stepWidget';
import { Step, StepStatus } from '../redux/interfaces/stepInterfaces';
import { ProductInformation } from '../components/UI/stepWidget/Views/ProductInformation/index';
import { Form } from '../components/UI/stepWidget/Views/Form';
import { FeedBack } from '../components/UI/stepWidget/Views/Feedback/index';


const configTabs:Step[] = [
    {
        component: ProductInformation,
        status: StepStatus.Active,
        title: 'Product Information'
    },
    {
        component: Form,
        status: StepStatus.Incomplete,
        title: 'Form',
    },
    {
        component: FeedBack,
        status: StepStatus.Incomplete,
        title: 'Feedback'
    }
]

export const TestPage = () => {

    return (
        <>
            <header className="App-header"></header>
            <main className="App-content">
                <StepWidget steps={ configTabs }/>
            </main>
        </>
    )
}

