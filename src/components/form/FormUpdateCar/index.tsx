import {SubmitHandler, useForm} from 'react-hook-form'
import { StyledContainerFormUpdateCar } from "./style"
import InputOutlined from '../Input';
import { IUpdateCarFormData, colorOptions, isPublisehdOptions, schemaUpdateCar } from '../validator';
import { zodResolver } from '@hookform/resolvers/zod';
import { BtnSubmit } from '../../Buttons/btnSubmit';
import { useAuth } from '../../../hooks/useAuth';
import { useEffect, useState } from 'react';
import SelectOutlined from '../Select';
import { IAllCarFIPE, ICarFIPE, ICarFIPEDetail } from '../../../providers/AuthProvider';
import { formatFuelNumber } from '../../../utils/formatFuel';
import { apiFipe } from '../../../service/apiFipe';


export default function FormUpdateCar (){

    const { register, handleSubmit, setValue,  formState: { errors } } = useForm<IUpdateCarFormData>({
        resolver: zodResolver(schemaUpdateCar)
    })

    const { car, carUpdate } = useAuth()  
    const [currentCar, setCurrentCar ] = useState<ICarFIPEDetail | null>(null)

    // Para encontrar o current car preciso de 4 variaveis
    const [currentModel, setCurrentModel] = useState<string>('')
    const [currentBrand, setCurrentBrand] = useState<string>('')
    const [currentYear, setCurrentYear] = useState<string | number>('')
    const [currentFuel, setCurrentFuel] = useState<string | number>('')

    const [optionsBrand, setOptionsBrand] = useState<{ value: string , label: string }[] | []>([])
    const [modelOptionsByBrand, setModelOptionsByBrand] = useState<{ value: string , label: string }[] | []>([])

    // Ao abrir o modal, vou setar os atuais campos do objeto em seus respectivos inputs

    useEffect(() => {
        if (car != null) {
            console.log(car.brand)
            console.log(car.model)
            setValue('brand', car.brand)
            setValue('model', car.model)
            setValue('value', car.value.toString())
            setValue('description', car.description)
            setValue('color', car.color)
            setValue('km', car.km.toString())
            setValue('is_published', car.is_published.toString())
            setValue('carImages', car.carImages[0].url)
        }
    }, [])


    // Sempre que  a marca for atualizada, vamos consumir a api, listar as chaves do nosso objeto de resposta nas opçoens de select das marcas e listar as opçoens de modelo dependendo da opção selecionada ne marca.  
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

    // O modelo é condicional a brand, sendo assim sempre que mudar o modelo teremos uma marca já selecionada, com esses dois dados, podemos filtrar da api o carro em questao. 
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

    // Tendo todos os dados necessarios para realizar o filtro da api, por fim setamos o current car, sempre que o ano for atualizado. Foi colocado o ano, pois eu sei que ele é o ultimo objeto a ser consedido, portanto quando eu o tenha, em 100% das vezes, vou ter os outros dados também. 
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
            if(currentCar != null){
                data.fuel = formatFuelNumber(currentCar.fuel)
                data.year = currentCar?.year.toString()
            }
            data.carImages = [newImageData]
            console.log(data)
            carUpdate(data, car.id)
        }
    }

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
    
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleBrandChange = (event: any) => {
        setCurrentBrand(event.target.value); // Atualiza a marca sempre que um novo valor é selecionado
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleModelChange = (event: any) => {
        setCurrentModel(event.target.value); // Atualiza a marca sempre que um novo valor é selecionado
    };


    return(
        <StyledContainerFormUpdateCar>
          <form onSubmit={handleSubmit(submit)}>
                <h2>Update <span>Car</span></h2>
                <SelectOutlined id="brand" register={register('brand')} label="Marca" options={optionsBrand}  onChange={handleBrandChange}/>
                {errors.brand && <p>{errors.brand.message}</p>}


                <SelectOutlined id="model" register={register('model')} label="Modelo" options={modelOptionsByBrand}  onChange={handleModelChange} />
                {errors.model && <p>{errors.model.message}</p>}



                <div>
                    {currentCar == null ? <span className='containerValueFIPE'> Ano </span> : <span className='containerValueFIPEFocus'>{currentCar.year}</span>}
                    {currentCar == null ? <span className='containerValueFIPE'> Combustivel </span> : <span className='containerValueFIPEFocus'>{formatFuelNumber(currentCar.fuel)}</span>}
                </div>

                <div>
                    <InputOutlined id="km" type="number" label='Quilometragem' register={register('km')}/> 
                    {errors.km && <p>{errors.km.message}</p>}
                    <SelectOutlined id="color" register={register('color')} label="Cor" options={colorOptions} />
                    {errors.color && <p>{errors.color.message}</p>}
                </div>

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