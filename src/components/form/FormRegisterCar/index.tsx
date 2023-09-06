import {SubmitHandler, useForm} from 'react-hook-form'
import { StyledContainerFormRegisterCar } from "./style"
import InputOutlined from '../input';
import {  IRegisterCarFormData, colorOptions, schemaRegisterCar } from '../validator';
import { zodResolver } from '@hookform/resolvers/zod';
import { BtnSubmit } from '../../Buttons/btnSubmit';
import { useAuth } from '../../../hooks/useAuth';
import SelectOutlined from '../Select';
import { useEffect, useState } from 'react';
import { apiFipe } from '../../../service/apiFipe';
import { IAllCarFIPE, ICarFIPE, ICarFIPEDetail } from '../../../providers/AuthProvider';
import { formatFuelNumber } from '../../../utils/formatFuel';


export default function FomrRegisterCar (){
    const { register, handleSubmit,  formState: { errors } } = useForm<IRegisterCarFormData>({
        resolver: zodResolver(schemaRegisterCar)
    })

    const { carCreate } = useAuth()  
    const [currentCar, setCurrentCar ] = useState<ICarFIPEDetail | null>(null)

    const [optionsBrand, setOptionsBrand] = useState<{ value: string , label: string }[] | []>([])
    const [modelOptionsByBrand, setModelOptionsByBrand] = useState<{ value: string , label: string }[] | []>([])

    const [currentBrand, setCurrentBrand] = useState<string>('')
    const [currentModel, setCurrentModel] = useState<string>('')
    const [currentYear, setCurrentYear] = useState<string | number>('')
    const [currentFuel, setCurrentFuel] = useState<string | number>('')

    

    const submit: SubmitHandler<IRegisterCarFormData> = (data) =>{

        data.value = Number(data.value);
        data.km = Number(data.km);
        data.is_published = true;

        if(currentCar != null){
            data.fuel = formatFuelNumber(currentCar.fuel)
            data.year = currentCar.year
        }

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const newImageData: any = {
            "url": data.carImages
        }

        data.carImages = [newImageData]
        carCreate(data)
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleBrandChange = (event: any) => {
        setCurrentBrand(event.target.value); // Atualiza a marca sempre que um novo valor é selecionado
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleModelChange = (event: any) => {
        setCurrentModel(event.target.value); // Atualiza a marca sempre que um novo valor é selecionado
    };


    const formatOptionsSelect = (list: ICarFIPE[]) => {
        const format =  list.map((carFipeDetail) => ({
            value: carFipeDetail.name,
            label: carFipeDetail.name,
        }));
        setModelOptionsByBrand(format)
    };

    const formatOptionsSelectByKey = (list: string[]) => {
        const format =  list.map((str) => ({
            value: str,
            label: str,
        }));
        setOptionsBrand(format)
    };



    
    useEffect(() => {
        (async () => {
          const apiResponse = await apiFipe.get(`/cars`);
          const response: IAllCarFIPE = apiResponse.data
          if (response === null || response === undefined) {
            // Lidar com o caso em que carsTableFIPE é null
          } else {
            const keys = Object.keys(response) as Array<keyof typeof response>
            formatOptionsSelectByKey(keys)
            if(currentBrand == 'chevrolet'){
                formatOptionsSelect(response.chevrolet)
            }else if(currentBrand == 'citroën'){
                formatOptionsSelect(response.citroën)
            }else if( currentBrand == 'fiat'){
                formatOptionsSelect(response.fiat)
            }else if( currentBrand == 'ford'){
                formatOptionsSelect(response.ford)
            }else if( currentBrand == 'honda'){
                formatOptionsSelect(response.honda)
            }else if( currentBrand == 'hyundai'){
                formatOptionsSelect(response.hyundai)
            }else if( currentBrand == 'nissan'){
                formatOptionsSelect(response.nissan)
            }else if( currentBrand == 'peugeot'){
                formatOptionsSelect(response.peugeot)
            }else if( currentBrand == 'renault'){
                formatOptionsSelect(response.renault)
            }else if( currentBrand == 'toyota'){
                formatOptionsSelect(response.toyota)
            }else if( currentBrand == 'volkswagen'){
                formatOptionsSelect(response.volkswagen)
            }else {
                formatOptionsSelect([])
            }

          }
        })();
      }, [currentBrand]);
    

    useEffect(() => {
        (async () => {
            const responseByBranch  =  await apiFipe.get(`/cars?brand=${currentBrand}`)
            const currentObj = responseByBranch.data.find((car: ICarFIPEDetail) =>{
                if(car.name == currentModel){
                    return car
                }
                 
            })
            setCurrentYear(currentObj.year)
            setCurrentFuel(currentObj.fuel)
        })()
    }, [currentModel])
    
    useEffect(() => {
        (async () => {
            try {
                const responseDetail =  await apiFipe.get(`/cars/unique?brand=${currentBrand}&name=${currentModel}&year=${currentYear}&fuel=${currentFuel}`)
                setCurrentCar(responseDetail.data)

            } catch (error) {
                console.error(error)
            }
        })()
    }, [currentYear])
   
     
    return(
        <StyledContainerFormRegisterCar>
            <form onSubmit={handleSubmit(submit)}>
                <h2>Register <span>Car</span></h2>
                <SelectOutlined id="brand" register={register('brand')} label="Marca" options={optionsBrand} onChange={handleBrandChange}/>
                {errors.brand && <p>{errors.brand.message}</p>}

                <SelectOutlined id="model" register={register('model')} label="Modelo" options={modelOptionsByBrand} onChange={handleModelChange} />
                {errors.model && <p>{errors.model.message}</p>}
             
                <div>
                    {currentCar == null ? <span className='containerValueFIPE'> Ano </span> : <span className='containerValueFIPEFocus'>{currentCar.year}</span>}
                    {currentCar == null ? <span className='containerValueFIPE'> Combustivel </span> : <span className='containerValueFIPEFocus'>{formatFuelNumber(currentCar.fuel)}</span>}
                </div>

                <div>
                    <InputOutlined id="km" type="number" label='KM' register={register('km')}/> 
                    {errors.km && <p>{errors.km.message}</p>}
                    <SelectOutlined id="color" register={register('color')} label="Cor" options={colorOptions} />
                    {errors.color && <p>{errors.color.message}</p>}
                </div>

                <div>
                    <InputOutlined id="value" type="number" label='Preço' register={register('value')}/>
                    {errors.value && <p>{errors.value.message}</p>}

                    <div>
                        {currentCar == null ? <span className='containerValueFIPE'> R$ </span> : <span className='containerValueFIPEFocus'>R$  {currentCar.value},00</span> }
                    </div> 

                </div>

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
