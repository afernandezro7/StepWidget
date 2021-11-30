import { PasswordInput } from '../../../eyeInput/PasswordInput';
import { HintInput } from '../../../hintInput/HintInput';
import { useForm } from '../../../../../hooks/useForm';
import { submitForm } from '../../../../../services/api';
import { State } from '../../../../../redux';
import { useSelector } from 'react-redux';

interface FormValues {
    pass: string,
    pass2: string,
    hint: string,
}

export const Form = () => {
    const {formValues, handleInputChange} = useForm<FormValues>({
        pass: '',
        pass2: '',
        hint: '',
    })

    const { pass, pass2, hint } = formValues
    const {currentStep} = useSelector((state:State) => state.step)
    


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        currentStep.beforeNext && currentStep.beforeNext(formValues)      
    }



    return (
        <>
        <div className="form-title">
            <h2>Crea tu Password Manager</h2>
        </div>

        <div className="form-content">
            <div className="form-info">
                <p>En primer lugar, debes crear una contraseña diferente para sus pertenecias electrónicas. 
                    No podrás recuperar tu contraseña así que recuérdala bien.
                </p>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="form-password">  

                    <PasswordInput 
                        label="Crea tu contraseña maestra"
                        onChangeInput={handleInputChange}
                        name="pass"
                        value={pass}
                        
                    />
                    <PasswordInput 
                        label="Repite tu contraseña maestra"
                        placeholder={"Repite tu contraseña"}
                        onChangeInput={handleInputChange}
                        name="pass2"
                        value={pass2}
                        
                    />

                </div>
                <div className="form-info">
                    <p>También crea una pista que te ayude a recordar tu contraseña maestra.</p>
                </div>
                <div className="form-hint">   

                    <HintInput
                        label="Crea tu pista para recordar tu contraseña(opcional)"
                        maxLength={60}
                        onChangeInput={handleInputChange}
                        value={hint}
                        name="hint"
                    />

                </div>

            </form>
        </div>
    </>
    )
}
