import { ReactNode, createContext, useState } from "react"

interface iAuthProviderProps {
    children: ReactNode
}

export interface IImage{
    id: number
    url: string
}

export interface ICar {
    id: number,
    name: string,
    brand: string,
    model: string,
    year: string,
    fuel: string,
    value: number,
    color: string,
    km: number,
    description: string
    is_published: boolean
    user_id: number
    carImages: IImage[]
}

export interface IResponseGetCars{
    prevPage: string | null
    nextPage: string | null
    count: number
    data: ICar[]
}

interface iAuthContextValues {
    modal: string
    setModal: React.Dispatch<React.SetStateAction<string>>
    cars: ICar[]
    setCars: React.Dispatch<React.SetStateAction<ICar[]>>
    mobileFilterMain: boolean
    setMobileFilterMain: React.Dispatch<React.SetStateAction<boolean>>
    carsFilter: ICar[]
    setCarsFilter: React.Dispatch<React.SetStateAction<ICar[]>>
    page: number
    setPage: React.Dispatch<React.SetStateAction<number>>
    responseGetCars: IResponseGetCars | null
    setResponseGetCars: React.Dispatch<React.SetStateAction<IResponseGetCars | null>>
}

export const AuthContext = createContext({} as iAuthContextValues)

export const AuthProvider = ({ children }: iAuthProviderProps) => {


    const [modal, setModal] = useState<string>('off')
    const [cars, setCars] = useState<ICar[]>([])
    const [carsFilter, setCarsFilter] = useState<ICar[]>([])
    const [mobileFilterMain, setMobileFilterMain] = useState<boolean>(false)
    const [page, setPage] = useState<number>(1)
    const [responseGetCars, setResponseGetCars] = useState<IResponseGetCars | null>(null)



    return (
        <AuthContext.Provider value={{ 
            modal,
            setModal,
            cars,
            setCars,
            mobileFilterMain,
            setMobileFilterMain,
            carsFilter,
            setCarsFilter, 
            page,
            setPage,
            responseGetCars,
            setResponseGetCars
        }}>
            {children}
        </AuthContext.Provider>
    )
}







