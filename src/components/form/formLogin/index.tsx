import {SubmitHandler, useForm} from 'react-hook-form'
import { StyledContainerFormLogin } from "./style"
import InputOutlined from '../Input';
import { ILoginFormData, schemaLogin } from '../validator';
import { zodResolver } from '@hookform/resolvers/zod';
import { BtnSubmit } from '../../Buttons/btnSubmit';
// import { useAuth } from '../../../hooks/useAuth';




export default function FomrLogin (){

    const { register, handleSubmit, reset } = useForm<ILoginFormData>({
        resolver: zodResolver(schemaLogin)
    })
    
    // const { signIn } = useAuth()
    
    const submit: SubmitHandler<ILoginFormData> = (data) =>{
        // signIn(data)
        console.log(data)
        reset()
    }

    return(
        <StyledContainerFormLogin>
            <form onSubmit={handleSubmit(submit)}>
                <h2>Sign <span>in</span></h2>
                <InputOutlined id="email" type="text" label='Email' register={register('email')}/>
                <InputOutlined id="password" type="password" label='Password'  register={register('password')}/>
                <a href='/register'>Create new account</a>
                <BtnSubmit text='Login' typeStyle='brand1'/>
            </form>
        </StyledContainerFormLogin>
    ) 
}