import { InputHTMLAttributes, FC, useState } from 'react';

import './hint_input.scss'

interface HintInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    onChangeInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const HintInput:FC<HintInputProps> = ({label,maxLength=60,onChangeInput,onChange,...inputProps}) => {

    const [length, setlength] = useState(0)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setlength(e.target.value.length)
        onChangeInput(e);

    }

    return (
        <div className="input-hint-wrapper">
            <label>{label}</label>
            <input
                maxLength={maxLength}
                className="form-control hint-input"
                onChange={handleChange}
                {...inputProps}
            />
            <span className="hint-counter">{length}/{maxLength}</span>
        </div>
    )
}
