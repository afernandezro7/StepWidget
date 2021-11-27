import { PasswordInput } from '../../../eyeInput/PasswordInput';
import { HintInput } from '../../../hintInput/HintInput';

export const Form = () => {
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
            <form >
                <div className="form-password">              
                    <PasswordInput label="Crea tu contraseña maestra"/>
                    <PasswordInput 
                        label="Repite tu contraseña maestra"
                        placeholder={"Repite tu contraseña"}
                    />
                </div>
                <div className="form-info">
                    <p>También crea una pista que te ayude a recordar tu contraseña maestra.</p>
                </div>
                <div className="form-hint">   
                    <HintInput
                        label="Crea tu pista para recordar tu contraseña(opcional)"
                        maxLength={60}
                    />

                </div>

            </form>
        </div>
    </>
    )
}
