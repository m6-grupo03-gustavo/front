import { SelectHTMLAttributes } from "react";
import { StyleSelectFieldset } from "./style";
import { UseFormRegisterReturn } from "react-hook-form";

interface ISelectOutlined extends SelectHTMLAttributes<HTMLSelectElement> {
    id: string;
    label: string;
    register: UseFormRegisterReturn<string>;
    options: { value: string , label: string }[];
    onChange?: React.ChangeEventHandler<HTMLSelectElement>;
}




export default  function SelectOutlined ({id, register, label, options, onChange}: ISelectOutlined){
    return(
        <StyleSelectFieldset >
            <select required id={id}  {...register} onChange={onChange} >
                <option></option>
                {options.map((option, index) => (
                    <option key={index} value={option.value} >{option.label}</option>
                ))}
            </select>
            <span>{label}</span>
        </StyleSelectFieldset>
    ) 
}