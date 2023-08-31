import {SubmitHandler, useForm} from 'react-hook-form'
import { StyledContainerFormRegisterCar } from "./style"
import InputOutlined from '../Input';
import {  IRegisterCarFormData, brandOptions, colorOptions, fuelOptions, schemaRegisterCar } from '../validator';
import { zodResolver } from '@hookform/resolvers/zod';
import { BtnSubmit } from '../../Buttons/btnSubmit';
import { useAuth } from '../../../hooks/useAuth';
import SelectOutlined from '../Select';
// import InputImage from '../InputImage';




export default function FomrRegisterCar (){

    const { register, handleSubmit,  formState: { errors } } = useForm<IRegisterCarFormData>({
        resolver: zodResolver(schemaRegisterCar)
    })

    const { carCreate } = useAuth()  
    
    const submit: SubmitHandler<IRegisterCarFormData> = (data) =>{

        data.value = Number(data.value);
        data.km = Number(data.km);
        data.is_published = true;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const newImageData: any = {
            "url": data.carImages
        }

        data.carImages = [newImageData]
        carCreate(data)
    }

      
    return(
        <StyledContainerFormRegisterCar>
            <form onSubmit={handleSubmit(submit)}>
                <h2>Register <span>Car</span></h2>
                <SelectOutlined id="brand" register={register('brand')} label="Marca" options={brandOptions} />
                {errors.brand && <p>{errors.brand.message}</p>}

                <InputOutlined id="model" type="text" label='Modelo' register={register('model')}/>
                {errors.model && <p>{errors.model.message}</p>}

                <div>
                    <InputOutlined id="year" type="text" label='Ano' register={register('year')}/>
                    {errors.year && <p>{errors.year.message}</p>}
                    <SelectOutlined id="fuel" register={register('fuel')} label="Combustível" options={fuelOptions} />
                    {errors.fuel && <p>{errors.fuel.message}</p>}
                </div>

                <div>
                    {/* Type number */}
                    <InputOutlined id="km" type="number" label='Quilometragem' register={register('km')}/> 
                    {errors.km && <p>{errors.km.message}</p>}
                    <SelectOutlined id="color" register={register('color')} label="Cor" options={colorOptions} />
                    {errors.color && <p>{errors.color.message}</p>}
                </div>
                    {/* Type number */}
                <InputOutlined id="value" type="number" label='Preço' register={register('value')}/>
                {errors.value && <p>{errors.value.message}</p>}

 

                <InputOutlined id="description" type="text" label='Descrição' register={register('description')}/>

                        {/* Temp */}
                        <InputOutlined
                        id="carImages"
                        type="text"
                        label="Car Image URLs"
                        register={register("carImages", { required: true })}
                        />
                        {errors.carImages && <p>{errors.carImages.message}</p>}
                {/* <InputImage register={register('carImages')} /> */}

                <BtnSubmit text='Register' typeStyle='brand1'/>
            </form>
        </StyledContainerFormRegisterCar>
    ) 
}