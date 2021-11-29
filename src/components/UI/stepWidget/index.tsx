
import React, { useEffect } from 'react'
import { StepsGroup } from './StepsGroup';
import { StepWrapper } from './StepWrapper';
import { CardHolder } from './CardHolder';
import { Card, CardButtonsProps } from './Card';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators, State } from '../../../redux';
import { bindActionCreators } from 'redux';
import { Step } from '../../../redux/interfaces/stepInterfaces';


export interface Props {
    steps: Step[]
}

const defaultButtons:CardButtonsProps = {
    backButtonName:         'Cancelar', 
    backButtonClassName:    '', 
    nextButtonName:         'Siguiente', 
    nextButtonClassName:    '',
    lastCallBack:           null,
    lastButtonName:         '', 
    lastButtonClassName:    '',
}

export const StepWidget = ({steps}:Props) => {

    const {currentStep,currentIndex, steps:currentSteps} = useSelector((state:State) => state.step)
    const dispatch = useDispatch()
    const {startChecking} = bindActionCreators(actionCreators,dispatch)
    let Component: ()=> JSX.Element = currentStep.component;
    let componentButtons = defaultButtons;

    useEffect(() => {
        startChecking(steps)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {       
        // eslint-disable-next-line react-hooks/exhaustive-deps
        Component = currentStep.component;
        // eslint-disable-next-line react-hooks/exhaustive-deps
        componentButtons = currentStep.buttons || defaultButtons

    }, [currentIndex, currentStep.component])

    return (

        <StepWrapper>
            <StepsGroup steps = {currentSteps}/>
            <CardHolder>
                <Card {...componentButtons} >
                    {
                        <Component/>
                    }
                </Card>
            </CardHolder>
        </StepWrapper>
 
    )
}

export default StepWidget;