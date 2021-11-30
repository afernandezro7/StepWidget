import React from 'react'
import { StepWidget } from '../components/UI/stepWidget';
import { Step, StepStatus } from '../redux/interfaces/stepInterfaces';
import { ProductInformation } from '../components/UI/stepWidget/Views/ProductInformation/index';
import { Form } from '../components/UI/stepWidget/Views/Form';
import { actionCreators } from '../redux';
import {  useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { submitForm } from '../services/api';
// import { FeedBack } from '../components/UI/stepWidget/Views/Feedback/index';

const handleFormSubmit = async() :Promise<boolean>=> { 

    try {
        const {status} = await submitForm('pruebaKO123')
        if(status===200) return true

        return false
    } catch (error) {

        return false
    }
}


export const TestPage = () => {

    const dispatch = useDispatch()
    const {startReset} = bindActionCreators(actionCreators,dispatch)

    const configTabs:Step[] = [
        {
            component: ProductInformation,
            status: StepStatus.Active,
            validationRequired: false,
            title: 'Product Information'
        },
        {
            component: Form,
            status: StepStatus.Incomplete,
            validationRequired: true,
            beforeNext: handleFormSubmit,
            title: 'Form',
        },
        {
            component: Form,
            buttons:{
                backButtonName: '',
                backButtonClassName: '',
                nextButtonClassName: '',
                nextButtonName: '',
                lastCallBack: startReset,
                lastButtonClassName: '',
                lastButtonName: ''
            },
            status: StepStatus.Incomplete,
            validationRequired: false,
            title: 'Feedback'
        }
    ]


    return (
        <>
            <header className="App-header"></header>
            <main className="App-content">
                <StepWidget steps={ configTabs }/>
            </main>
        </>
    )
}

