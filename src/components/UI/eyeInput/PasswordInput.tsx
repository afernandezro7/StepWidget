import { FC, InputHTMLAttributes, useState } from 'react';
import './password_input.scss';
import eye from "./eye.svg";

interface PasswordInputProps extends InputHTMLAttributes<HTMLInputElement> {
    reveal?: boolean;
    label: string;
    onChangeInput : (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const PasswordInput: FC<PasswordInputProps> = ({ label,reveal = false, onChangeInput ,onChange, ...inputProps }) => {

    const [eye_state, setEye_state] = useState(reveal)


    const handleToggleInputMode = () => {
        setEye_state(!eye_state)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEye_state(false)
        onChangeInput(e);
    }

    return (
        <div className="input-password-wrapper">
            <label>{label}</label>
            <input
                className="form-control password-input"
                type={eye_state ? "text" : "password"}
                onChange={handleChange}
                {...inputProps}
            />
            <img
                src={eye}
                alt="eye"
                onClick={handleToggleInputMode}
                className={`${(eye_state) ? "active " : ""} icon-eye`}
            />



        </div>
    );
}
