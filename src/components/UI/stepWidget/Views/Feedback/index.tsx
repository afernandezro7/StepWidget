import './feedback.scss'

import { BsCheck2Circle } from "react-icons/bs";
import { ImWarning } from "react-icons/im";

const ErrorFeedBack = () => {

    return (
        <div className="feedback-card">
            <ImWarning style={{fontSize:80, color:'#ffc107'}}/>
            <div className="feedback-content">
                <h3 className="feedback-title">Ha habido un error</h3>
                <p>No hemos podido modificar tu Contraseña Maestra. Inténtalo más tarde.</p>   
                <hr />           
            </div>
        </div>
    )
}

const SuccessFeedBack = () => {

    return (
        <div className="feedback-card">
            <BsCheck2Circle style={{fontSize:80, color:'#28a745'}}/>
            <div className="feedback-content">
                <h3 className="feedback-title">Tu Password Manager ha sido creado con éxito</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam molestiae fugit ipsam.</p>              
                <hr />        
            </div>
        </div>
    )
}

export const FeedBack = ({success}:{success:boolean}) => {

    return (
        <>
            {
                success 
                    ? <SuccessFeedBack/>
                    : <ErrorFeedBack/>
            }
        </>
    )
}
