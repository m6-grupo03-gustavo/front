import { UseFormRegisterReturn } from "react-hook-form";
import { StyleFieldset } from "./style"
import { InputHTMLAttributes } from "react";

interface IImputOutlined extends InputHTMLAttributes<HTMLInputElement> {
    id: string;
    type: "text" | "password" | "email" | 'number';
    label: string;
    register: UseFormRegisterReturn<string>;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export default  function InputOutlined ({id, register, type, label, onChange}: IImputOutlined){
    return(
        <StyleFieldset >
            <input type={type} required id={id}  {...register} onChange={onChange}  />
            <span>{label}</span>
        </StyleFieldset>
    ) 
}