import { UseFormRegisterReturn } from "react-hook-form";
import { StyleFieldset } from "./style"
import { InputHTMLAttributes } from "react";

interface IImputOutlined extends InputHTMLAttributes<HTMLInputElement> {
    id: string;
    type: "text" | "password" | "email";
    label: string;
    register: UseFormRegisterReturn<string>;
}

export default  function InputOutlined ({id, register, type, label}: IImputOutlined){
    return(
        <StyleFieldset >
            <input type={type} required id={id}  {...register}/>
            <span>{label}</span>
        </StyleFieldset>
    ) 
}