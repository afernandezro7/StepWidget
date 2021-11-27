import { FC, InputHTMLAttributes, useRef, useState } from 'react';
import './password_input.scss';
import eye from "./eye.svg";

interface PasswordInputProps extends InputHTMLAttributes<HTMLInputElement> {
    reveal?: boolean;
    label: string;
    onChangeInput? : (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const PasswordInput: FC<PasswordInputProps> = ({ value="",label,reveal = false, onChangeInput ,onChange, ...inputProps }) => {

    const [eye_state, setEye_state] = useState(reveal)
    const [inputvalue, setInputvalue] = useState(value)
    const inputRef = useRef<HTMLInputElement| null>(null)

    const handleToggleInputMode = () => {
        setEye_state(!eye_state)
        console.log('log')
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputvalue(e.target.value)
        setEye_state(false)

        onChangeInput && onChangeInput(e);
    }

    return (
        <div className="input-password-wrapper">
            <label>{label}</label>
            <input
                ref={inputRef}
                className="form-control password-input"
                {...inputProps}
                type={eye_state ? "text" : "password"}
                onChange={handleChange}
                value={inputvalue}
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
