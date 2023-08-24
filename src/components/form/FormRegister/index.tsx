import {SubmitHandler, useForm} from 'react-hook-form'
import { StyledContainerFormRegister } from "./style"
import InputOutlined from '../Input';
import { IRegisterFormData, schemaRegister } from '../validator';
import { zodResolver } from '@hookform/resolvers/zod';
import { BtnSubmit } from '../../Buttons/btnSubmit';
import { useAuth } from '../../../hooks/useAuth';
import SelectOutlined from '../Select';




export default function FomrRegister (){

    const { register, handleSubmit, formState: { errors } } = useForm<IRegisterFormData>({
        resolver: zodResolver(schemaRegister)
    })

    const { userRegister } = useAuth()  
    
    const submit: SubmitHandler<IRegisterFormData> = (data) =>{
        userRegister(data)
    }

    const options = [
        { value: 'buyer', label: 'Comprador' },
        { value: 'seller', label: 'Anunciante' },
      ];

    return(
        <StyledContainerFormRegister>
            <form onSubmit={handleSubmit(submit)}>
                <h2>Register <span>account</span></h2>
                <InputOutlined id="email" type="text" label='Email' register={register('email')}/>
                {errors.email && <p>{errors.email.message}</p>}
                <InputOutlined id="password" type="password" label='Senha'  register={register('password')}/>
                {errors.password && <p>{errors.password.message}</p>}
                <InputOutlined id="name" type="text" label='Nome' register={register('name')}/>
                {errors.name && <p>{errors.name.message}</p>}
                <InputOutlined id="cpf" type="text" label='CPF' register={register('cpf')}/>
                {errors.cpf && <p>{errors.cpf.message}</p>}
                <InputOutlined id="phone" type="text" label='Celular' register={register('phone')}/>
                {errors.phone && <p>{errors.phone.message}</p>}
                <InputOutlined id="birthdate" type="text" label='Data de nascimento' register={register('birthdate')}/>
                {errors.birthdate && <p>{errors.birthdate.message}</p>}
                <InputOutlined id="description" type="text" label='Descrição' register={register('description')}/>
                {errors.description && <p>{errors.description.message}</p>}
                <InputOutlined id="zipcode" type="text" label='CEP' register={register('zipcode')}/>
                {errors.zipcode && <p>{errors.zipcode.message}</p>}
                <div>
                    <InputOutlined id="state" type="text" label='Estado' register={register('state')}/>
                    {errors.state && <p>{errors.state.message}</p>}
                    <InputOutlined id="city" type="text" label='Cidade' register={register('city')}/>
                    {errors.city && <p>{errors.city.message}</p>}
                </div>
                <InputOutlined id="street" type="text" label='Rua' register={register('street')}/>
                {errors.street && <p>{errors.street.message}</p>}
                <div>
                    <InputOutlined id="number" type="text" label='Numero' register={register('number')}/>
                    {errors.number && <p>{errors.number.message}</p>}
                    <InputOutlined id="complement" type="text" label='Complemento' register={register('complement')}/>
                    {errors.complement && <p>{errors.complement.message}</p>}
                </div>
                <SelectOutlined id="mySelect" register={register('account_state')} label="Tipo de conta" options={options} />
                {errors.account_state && <p>{errors.account_state.message}</p>}

                <BtnSubmit text='Register' typeStyle='brand1'/>
            </form>
        </StyledContainerFormRegister>
    ) 
}