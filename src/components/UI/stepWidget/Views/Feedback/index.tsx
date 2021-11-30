import './feedback.scss'

import { BsCheck2Circle } from "react-icons/bs";
import { ImWarning } from "react-icons/im";
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators, State } from '../../../../../redux';
import { bindActionCreators } from 'redux';
import { useTranslation } from 'react-i18next';

const ErrorFeedBack = () => {

    const [t] = useTranslation("global")

    const dispatch = useDispatch()
    const {startReset} = bindActionCreators(actionCreators,dispatch)
    const handleClick = ()=> {
        startReset()
    }
    return (
        <>
            <div className="feedback-card">
                <ImWarning style={{fontSize:80, color:'#ffc107'}}/>
                <div className="feedback-content">
                    <h3 className="feedback-title">{t("product_feed.error.title")}</h3>
                    <p>{t("product_feed.error.content")}</p>            
                </div>
            </div>
            <hr />        
            <div className="link-group">
                <button onClick={handleClick} className="btn link-button">{t("product_feed.error.btn_link")}</button>
            </div>
        </>
    )
}

const SuccessFeedBack = () => {
    const [t] = useTranslation("global")
    return (
        <>
            <div className="feedback-card">
                <BsCheck2Circle style={{fontSize:80, color:'#28a745'}}/>
                <div className="feedback-content">
                    <h3 className="feedback-title">{t("product_feed.error.title")}</h3>
                    <p>{t("product_feed.success.content")}</p>              
                </div>
            </div>
            <hr />        
            <div className="link-group">
                <button className="btn link-button">{t("product_feed.success.btn_link")}</button>
            </div>
        </>
    )
}

export const FeedBack = () => {
    const {currentStep} = useSelector((state:State) => state.step)
    return (
        <>
            {
                currentStep.feedBackNext
                    ? <SuccessFeedBack/>
                    : <ErrorFeedBack/>
            }
        </>
    )
}
