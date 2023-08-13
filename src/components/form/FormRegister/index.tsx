import {SubmitHandler, useForm} from 'react-hook-form'
import { StyledContainerFormRegister } from "./style"
import InputOutlined from '../Input';
import { IRegisterFormData, schemaRegister } from '../validator';
import { zodResolver } from '@hookform/resolvers/zod';
import { BtnSubmit } from '../../Buttons/btnSubmit';
// import { useAuth } from '../../../hooks/useAuth';




export default function FomrRegister (){

    const { register, handleSubmit, reset } = useForm<IRegisterFormData>({
        resolver: zodResolver(schemaRegister)
    })
    
    // const { register } = useAuth()
    
    const submit: SubmitHandler<IRegisterFormData> = (data) =>{
        // register(data)
        console.log(data)
        reset()
    }

    return(
        <StyledContainerFormRegister>
            <form onSubmit={handleSubmit(submit)}>
                <h2>Register <span>account</span></h2>
                <InputOutlined id="email" type="text" label='Email' register={register('email')}/>
                <InputOutlined id="password" type="password" label='Senha'  register={register('password')}/>
                <InputOutlined id="name" type="text" label='Nome' register={register('name')}/>
                <InputOutlined id="cpf" type="text" label='CPF' register={register('cpf')}/>
                <InputOutlined id="phone" type="text" label='Celular' register={register('phone')}/>
                <InputOutlined id="birthdate" type="text" label='Data de nascimento' register={register('birthdate')}/>
                <InputOutlined id="description" type="text" label='Descrição' register={register('description')}/>
                <InputOutlined id="zipcode" type="text" label='CEP' register={register('zipcode')}/>
                <div>
                    <InputOutlined id="state" type="text" label='Estado' register={register('state')}/>
                    <InputOutlined id="city" type="text" label='Cidade' register={register('city')}/>
                </div>
                <InputOutlined id="street" type="text" label='Rua' register={register('street')}/>

                <div>
                    <InputOutlined id="number" type="text" label='Numero' register={register('number')}/>
                    <InputOutlined id="complement" type="text" label='Complemento' register={register('complement')}/>
                </div>
                
                <InputOutlined id="register_date" type="text" label='Data de registro' register={register('register_date')}/>
                <InputOutlined id="account_state" type="text" label='Data de registro' register={register('account_state')}/>

                <BtnSubmit text='Register' typeStyle='brand1'/>
            </form>
        </StyledContainerFormRegister>
    ) 
}