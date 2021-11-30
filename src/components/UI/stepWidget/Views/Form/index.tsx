import { PasswordInput } from '../../../eyeInput/PasswordInput';
import { HintInput } from '../../../hintInput/HintInput';
import { useForm } from '../../../../../hooks/useForm';
import { submitForm } from '../../../../../services/api';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../../../../redux';
import { useState } from 'react';

import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import './form.scss'
import { useTranslation } from 'react-i18next';

interface FormValues {
    pass: string,
    pass2: string,
    hint: string,
}

export const Form = () => {

    const [t] = useTranslation("global")

    const {formValues, handleInputChange} = useForm<FormValues>({
        pass: '',
        pass2: '',
        hint: '',
    })
    const [loading, setloading] = useState(false)
    

    const { pass, pass2, hint } = formValues

    const dispatch = useDispatch()
    const {startBackStep, startNextStep, startFeedbackNextComponent} = bindActionCreators(actionCreators,dispatch)
    

    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>)=> {
        e.preventDefault()
        if(pass !== pass2) return
        if(pass.length < 5) return

        let statusFeedback:boolean = false;

        setloading(true)
        try {
            const rejectUri = 'pruebaKO123'
            // const successUri = 'prueba123'
            const {status} = await submitForm(rejectUri)
            
            if(status===200) {
                statusFeedback = true
            }

            
        } catch (error) {
            console.log('error', error)
        }   
        setloading(false)

        // Setup feedback to next component and go next
        startFeedbackNextComponent(statusFeedback)
        startNextStep()
    }

    const handleBack = ()=> {
        startBackStep()
    }


    return (
        <>
        <div className="form-title">
            <h2>{t("product_form.title")}</h2>
        </div>

        <div className="form-content">
            <div className="form-info">
                <p>{t("product_form.info1")}</p>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="form-password">  

                    <PasswordInput 
                        label={t("product_form.password_label")}
                        onChangeInput={handleInputChange}
                        name="pass"
                        value={pass}
                        
                    />
                    <PasswordInput 
                        label={t("product_form.password2_label")}
                        placeholder={t("product_form.password2_placeholder")}
                        onChangeInput={handleInputChange}
                        name="pass2"
                        value={pass2}
                        
                    />

                </div>
                <div className="form-info">
                    <p>{t("product_form.info2")}</p>
                </div>
                <div className="form-hint">   

                    <HintInput
                        label={t("product_form.hint")}
                        maxLength={60}
                        onChangeInput={handleInputChange}
                        value={hint}
                        name="hint"
                    />

                </div>
                
                <hr />
                <div className="btn-group">
                    <button className="btn btn-secondary" onClick={handleBack} >{t("back_btn")}</button>                                               
                    <button className="btn btn-primary" disabled={loading} type="submit">
                    {t("next_btn")} {loading
                                ? <Loader
                                    type="Puff"
                                    color="#000"
                                    height={10}
                                    width={10}
                                />
                                : <>&gt;</>
                        }
                    </button>
                    
                </div>
            </form>
        </div>
    </>
    )
}
