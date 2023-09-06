import {SubmitHandler, useForm} from 'react-hook-form'
import { StyledContainerFormUpdateUserInfo } from "./style"
import InputOutlined from '../input';
import { IUpdateUserInfo, schemaUpdateUserInfo } from '../validator';
import { zodResolver } from '@hookform/resolvers/zod';
import { BtnSubmit } from '../../Buttons/btnSubmit';
import { useAuth } from '../../../hooks/useAuth';
import { useEffect } from 'react';



export default function FormUpdateUserInfo (){

    const { register, handleSubmit, setValue,  formState: { errors } } = useForm<IUpdateUserInfo>({
        resolver: zodResolver(schemaUpdateUserInfo)
    })

    const { user, userInfoUpdate } = useAuth()  

    useEffect(() => {
        if (user) {
            setValue('name', user.name)
            setValue('email', user.email)
            setValue('phone', user.phone)
            setValue('cpf', user.cpf)
            setValue('birthdate', user.birthdate)
            setValue('description', user.description)
        }
    }, [])
    
    const submit: SubmitHandler<IUpdateUserInfo> = (data) =>{
        if(user){
            userInfoUpdate(data, user.id)
        }
    }


    return(
        <StyledContainerFormUpdateUserInfo>
         <form onSubmit={handleSubmit(submit)}>
                <h2>Update <span>User</span></h2>
                <div>
                    <InputOutlined id="name" type="text" label='Nome' register={register('name')}/>
                    {errors.name && <p>{errors.name.message}</p>}
                    <InputOutlined id="email" type="text" label='Email' register={register('email')}/>
                    {errors.email && <p>{errors.email.message}</p>}
                </div>

                <div>
                    <InputOutlined id="phone" type="text" label='Telefone' register={register('phone')}/>
                    {errors.phone && <p>{errors.phone.message}</p>}
                    <InputOutlined id="cpf" type="text" label='CPF' register={register('cpf')}/>
                    {errors.cpf && <p>{errors.cpf.message}</p>}
                </div>

                <div>
                    <InputOutlined id="birthdate" type="text" label='Data Nascimento' register={register('birthdate')}/>
                    {errors.birthdate && <p>{errors.birthdate.message}</p>}
                    <InputOutlined id="description" type="text" label='Descrição' register={register('description')}/>
                    {errors.description && <p>{errors.description.message}</p>}
                </div>

                <BtnSubmit text='Save' typeStyle='brand1'/>
            </form>
        </StyledContainerFormUpdateUserInfo>
    ) 
}