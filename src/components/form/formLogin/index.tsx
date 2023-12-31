import {SubmitHandler, useForm} from 'react-hook-form'
import InputOutlined from '../input';
import { ILoginFormData, schemaLogin } from '../validator';
import { zodResolver } from '@hookform/resolvers/zod';
import { BtnSubmit } from '../../Buttons/btnSubmit';
import { useAuth } from '../../../hooks/useAuth';
import { StyledContainerFormLoginData } from './style';


export default function FomrLogin (){

    const { register, handleSubmit, reset, formState: { errors } } = useForm<ILoginFormData>({
        resolver: zodResolver(schemaLogin)
    })
    
    const { signIn } = useAuth()
    
    const submit: SubmitHandler<ILoginFormData> = (data) =>{
        signIn(data)
        reset()
    }

    return(
        <StyledContainerFormLoginData>
            <form onSubmit={handleSubmit(submit)}>
                <h2>Sign <span>in</span></h2>
                <InputOutlined id="email" type="text" label='Email' register={register('email')}/>
                {errors.email && <p>{errors.email.message}</p>}
                <InputOutlined id="password" type="password" label='Password'  register={register('password')}/>
                {errors.password && <p>{errors.password.message}</p>}
                <BtnSubmit text='Login' typeStyle='brand1'/>
                <a href="/user/resetPassword">Forget you password?</a>
                <a className='newAccount_link' href='/register'>Create new account</a>
            </form>
        </StyledContainerFormLoginData>
    ) 
}