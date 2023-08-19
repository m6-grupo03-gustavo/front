import { StyleFieldsetImage } from "./style"
import { UseFormRegister, FieldValues } from "react-hook-form";


interface IInputImage{
    register: UseFormRegister<FieldValues>
}

export default  function InputImage ({ register } : IInputImage){
    
    function handleAvatar(event) {
        event.target.files[0]
    }

    return(
        <StyleFieldsetImage >
            <input  type="file"  id="avatar"  {...register} onChange={handleAvatar}/>
        </StyleFieldsetImage>
    ) 
}