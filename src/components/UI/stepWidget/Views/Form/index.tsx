import { PasswordInput } from '../../../eyeInput/PasswordInput';
import { HintInput } from '../../../hintInput/HintInput';
import { submitForm } from '../../../../../services/api';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../../../../redux';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import './form.scss'
import { useState } from 'react';

interface FormValues {
    pass: string,
    pass2: string,
    hint: string,
}

export const Form = () => {

    const [t] = useTranslation("global")

    const formik = useFormik<FormValues>({
        initialValues: {
            pass: '',
            pass2: '',
            hint: ''
        },
        validationSchema: Yup.object({
            pass: Yup.string()
                .required(t("product_form.validation.password.required"))
                .min(8, t("product_form.validation.password.min"))
                .max(24, t("product_form.validation.password.max"))
                .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, t("product_form.validation.password.matches")),
            pass2: Yup.string()
                .required(t("product_form.validation.password2.required"))
                .oneOf([Yup.ref('pass'), null], t("product_form.validation.password2.match")),
            hint: Yup.string().notRequired()
        }),
        onSubmit: (values) => {
            handleSubmit(values)
        }
    })




    const [loading, setloading] = useState(false)
    const dispatch = useDispatch()
    const { startBackStep, startNextStep, startFeedbackNextComponent } = bindActionCreators(actionCreators, dispatch)


    const handleSubmit = async (values: FormValues) => {

        let statusFeedback: boolean = false;
        setloading(true)
        try {
            const rejectUri = 'pruebaKO123'
            // const successUri = 'prueba123'
            const { status } = await submitForm(rejectUri)

            if (status === 200) {
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


    const handleBack = () => {
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
                <form onSubmit={formik.handleSubmit}>
                    <div className="form-password">
                        <div>
                            <PasswordInput
                                label={t("product_form.password_label")}
                                onChangeInput={formik.handleChange}
                                name="pass"
                                value={formik.values.pass}
                            />
                            {
                                formik.touched.pass && formik.errors.pass
                                    ? <div className="validation-error">
                                        <p>{formik.errors.pass}</p>
                                    </div>

                                    : null
                            }
                        </div>
                        <div>
                            <PasswordInput
                                label={t("product_form.password2_label")}
                                placeholder={t("product_form.password2_placeholder")}
                                onChangeInput={formik.handleChange}
                                name="pass2"
                                value={formik.values.pass2}
                                
                                />
                            {
                                formik.touched.pass2 && formik.errors.pass2
                                    ? <div className="validation-error">
                                        <p>{formik.errors.pass2}</p>
                                    </div>

                                    : null
                            }
                        </div>

                    </div>
                    <div className="form-info">
                        <p>{t("product_form.info2")}</p>
                    </div>
                    <div className="form-hint">

                        <HintInput
                            label={t("product_form.hint")}
                            maxLength={60}
                            onChangeInput={formik.handleChange}
                            value={formik.values.hint}
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
