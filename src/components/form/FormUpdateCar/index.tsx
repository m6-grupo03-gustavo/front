import {SubmitHandler, useForm} from 'react-hook-form'
import { StyledContainerFormUpdateCar } from "./style"
import InputOutlined from '../Input';
import { IUpdateCarFormData, brandOptions, colorOptions, fuelOptions, isPublisehdOptions, schemaUpdateCar } from '../validator';
import { zodResolver } from '@hookform/resolvers/zod';
import { BtnSubmit } from '../../Buttons/btnSubmit';
import { useAuth } from '../../../hooks/useAuth';
import { useEffect } from 'react';
import SelectOutlined from '../Select';


export default function FormUpdateCar (){

    const { register, handleSubmit, setValue,  formState: { errors } } = useForm<IUpdateCarFormData>({
        resolver: zodResolver(schemaUpdateCar)
    })

    const { car, carUpdate } = useAuth()  

    useEffect(() => {
        
        if (car != null) {
            setValue('brand', car.brand)
            setValue('model', car.model)
            setValue('year', car.year)
            setValue('fuel', car.fuel)
            setValue('value', car.value.toString())
            setValue('description', car.description)
            setValue('color', car.color)
            setValue('km', car.km.toString())
            setValue('is_published', car.is_published.toString())
            setValue('carImages', car.carImages[0].url)
        }
    }, [])
    
    const submit: SubmitHandler<IUpdateCarFormData> = (data) =>{
        if(car){
            data.value = Number(data.value);
            data.km = Number(data.km);

            if(data.is_published == 'false'){
                data.is_published = false;
                console.log(data.is_published)
            }else {
                data.is_published = true
            }

            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const newImageData: any = {
                "url": data.carImages
            }

            data.carImages = [newImageData]
            console.log(data)
            carUpdate(data, car.id)
        }
    }


    return(
        <StyledContainerFormUpdateCar>
          <form onSubmit={handleSubmit(submit)}>
                <h2>Update <span>Car</span></h2>
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

                <SelectOutlined id="isPublished" register={register('is_published')} label="Publicado" options={isPublisehdOptions} />
                {errors.is_published && <p>{errors.is_published.message}</p>}

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
        </StyledContainerFormUpdateCar>
    ) 
}