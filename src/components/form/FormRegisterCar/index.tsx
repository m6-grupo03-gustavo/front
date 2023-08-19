import {SubmitHandler, useForm} from 'react-hook-form'
import { StyledContainerFormRegisterCar } from "./style"
import InputOutlined from '../Input';
import {  IRegisterCarFormData, schemaRegisterCar } from '../validator';
import { zodResolver } from '@hookform/resolvers/zod';
import { BtnSubmit } from '../../Buttons/btnSubmit';
import { useAuth } from '../../../hooks/useAuth';
import SelectOutlined from '../Select';
// import InputImage from '../InputImage';




export default function FomrRegisterCar (){

    const { register, handleSubmit, reset,  formState: { errors } } = useForm<IRegisterCarFormData>({
        resolver: zodResolver(schemaRegisterCar)
    })

    const { carCreate } = useAuth()  
    
    const submit: SubmitHandler<IRegisterCarFormData> = (data) =>{

        data.value = Number(data.value);
        data.km = Number(data.km);
        data.is_published = true;
        const newImageData = {
            "url": data.carImages
        }

        data.carImages = [newImageData]

        // console.log(data, 'DATA CARRRRR')
        carCreate(data)
        reset()
    }

      


    const colorOptions = [
        { value: 'amarelo', label: 'Amarelo' },
        { value: 'azul', label: 'Azul' },
        { value: 'bege', label: 'Bege' },
        { value: 'branco', label: 'Branco' },
        { value: 'cinza', label: 'Cinza' },
        { value: 'prata', label: 'Prata' },
        { value: 'preto', label: 'Preto' },
        { value: 'verde', label: 'Verde' },
        { value: 'vermelho', label: 'Vermelho' },
        { value: 'outros', label: 'Outros' },
      ];

      const brandOptions = [
        { value: 'Audi', label: 'Audi' },
        { value: 'BMW', label: 'BMW' },
        { value: 'Caoa Chery', label: 'Caoa Chery' },
        { value: 'Chevrolet', label: 'Chevrolet' },
        { value: 'Citroën', label: 'Citroën' },
        { value: 'Fiat', label: 'Fiat' },
        { value: 'Ferrari', label: 'Ferrari' },
        { value: 'Ford', label: 'Ford' },
        { value: 'Honda', label: 'Honda' },
        { value: 'Hyundai', label: 'Hyundai' },
        { value: 'Jeep', label: 'Jeep' },
        { value: 'Kia', label: 'Kia' },
        { value: 'Land Rover', label: 'Land Rover' },
        { value: 'Mercedes-Benz', label: 'Mercedes-Benz' },
        { value: 'Mitsubishi', label: 'Mitsubishi' },
        { value: 'Nissan', label: 'Nissan' },
        { value: 'Porsche', label: 'Porsche' },
        { value: 'Peugeot', label: 'Peugeot' },
        { value: 'Renault', label: 'Renault' },
        { value: 'Toyota', label: 'Toyota' },
        { value: 'Volvo', label: 'Volvo' },
        { value: 'Volkswagen', label: 'Volkswagen' },
        { value: 'Outros', label: 'Outros' },
      ]

      const fuelOptions = [
        { value: 'Gasolina', label: 'Gasolina' },
        { value: 'Etanol', label: 'Etanol' },
        { value: 'Eletrico', label: 'Elétrico' },
        { value: 'Disel', label: 'Disel' },
        { value: 'Flex', label: 'Flex' },
      ]

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