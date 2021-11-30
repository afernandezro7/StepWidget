import { useState } from "react";

export interface UseFormInterface<T> {
    formValues: T;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) =>void;
    reset: () => void;
}

export function useForm<T> (initialState:T):UseFormInterface<T> {

    const [values, setValues] = useState(initialState);

    const reset = () =>{
        setValues(initialState)
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>)=>{

        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    }

    return {formValues:values, handleInputChange, reset}
}
