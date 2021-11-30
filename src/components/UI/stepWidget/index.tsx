
import React, { useEffect } from 'react'
import { StepsGroup } from './StepsGroup';
import { StepWrapper } from './StepWrapper';
import { CardHolder } from './CardHolder';
import { Card } from './Card';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators, State } from '../../../redux';
import { bindActionCreators } from 'redux';
import { Step } from '../../../redux/interfaces/stepInterfaces';


export interface Props {
    steps: Step[]
}


export const StepWidget = ({steps}:Props) => {

    const {currentStep,currentIndex, steps:currentSteps} = useSelector((state:State) => state.step)
    const dispatch = useDispatch()
    const {startChecking} = bindActionCreators(actionCreators,dispatch)
    let Component: ()=> JSX.Element = currentStep.component;

    useEffect(() => {
        startChecking(steps)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {       
        // eslint-disable-next-line react-hooks/exhaustive-deps
        Component = currentStep.component;

    }, [currentIndex, currentStep.component])

    return (

        <StepWrapper>
            <StepsGroup steps = {currentSteps}/>
            <CardHolder>
                <Card>
                    {
                        <Component/>
                    }
                </Card>
            </CardHolder>
        </StepWrapper>
 
    )
}

export default StepWidget;