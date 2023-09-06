import {SubmitHandler, useForm} from 'react-hook-form'
import { StyledContainerFormUpdateAdress } from "./style"
import InputOutlined from '../input';
import { IUpdateAdressFormData, schemaUpdateAdress } from '../validator';
import { zodResolver } from '@hookform/resolvers/zod';
import { BtnSubmit } from '../../Buttons/btnSubmit';
import { useAuth } from '../../../hooks/useAuth';
import { useEffect } from 'react';



export default function FormUpdateAdress (){

    const { register, handleSubmit, setValue,  formState: { errors } } = useForm<IUpdateAdressFormData>({
        resolver: zodResolver(schemaUpdateAdress)
    })

    const { user, adressUpdate } = useAuth()  

    useEffect(() => {
        if (user) {
            setValue('zipcode', user.zipcode)
            setValue('street', user.street)
            setValue('state', user.state)
            setValue('city', user.city)
            setValue('number', user.number)
            setValue('complement', user.complement)
        }
    }, [])
    
    const submit: SubmitHandler<IUpdateAdressFormData> = (data) =>{
        if(user){
            adressUpdate(data, user.id)
        }
    }


    return(
        <StyledContainerFormUpdateAdress>
         <form onSubmit={handleSubmit(submit)}>
                <h2>Update <span>Adress</span></h2>
                <div>
                    <InputOutlined id="zipcode" type="text" label='CEP' register={register('zipcode')}/>
                    {errors.zipcode && <p>{errors.zipcode.message}</p>}
                    <InputOutlined id="street" type="text" label='Rua' register={register('street')}/>
                    {errors.street && <p>{errors.street.message}</p>}
                </div>

                <div>
                    <InputOutlined id="state" type="text" label='Estado' register={register('state')}/>
                    {errors.state && <p>{errors.state.message}</p>}
                    <InputOutlined id="city" type="text" label='Cidade' register={register('city')}/>
                    {errors.city && <p>{errors.city.message}</p>}
                </div>

                <div>
                    <InputOutlined id="number" type="text" label='Numero' register={register('number')}/>
                    {errors.number && <p>{errors.number.message}</p>}
                    <InputOutlined id="complement" type="text" label='Complemento' register={register('complement')}/>
                    {errors.complement && <p>{errors.complement.message}</p>}
                </div>

                <BtnSubmit text='Save' typeStyle='brand1'/>
            </form>
        </StyledContainerFormUpdateAdress>
    ) 
}