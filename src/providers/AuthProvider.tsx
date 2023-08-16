import { ReactNode, createContext, useState } from "react"
import { api } from "../service/api"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom";
import { AccountState, ILoginFormData, IRegisterFormData } from "../components/Form/validator";


interface iAuthProviderProps {
    children: ReactNode
}

export interface IImage{
    id: number
    url: string
}

interface ILoginResponse {
    token: string
}

interface IRegisterResponse{
    id: number,
    name: string,
    email: string,
    password: string,
    phone: string,
    cpf: string,
    birthdate: string,
    description: string,
    zipcode: string,
    state: string,
    city: string,
    street: string,
    number: string,
    complement: string,
    register_date: Date,
    account_state: AccountState
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
    userRegister: (data: IRegisterFormData) => Promise<void>
    loading: boolean
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
    signIn:  (data: ILoginFormData) => Promise<void>
}

export const AuthContext = createContext({} as iAuthContextValues)

export const AuthProvider = ({ children }: iAuthProviderProps) => {

    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)
    const [modal, setModal] = useState<string>('off')
    const [cars, setCars] = useState<ICar[]>([])
    const [carsFilter, setCarsFilter] = useState<ICar[]>([])
    const [mobileFilterMain, setMobileFilterMain] = useState<boolean>(false)
    const [page, setPage] = useState<number>(1)
    const [responseGetCars, setResponseGetCars] = useState<IResponseGetCars | null>(null)

    const signIn = async (data: ILoginFormData) => {
        try {
            const response = await api.post<ILoginResponse>("/login", data)
            const { token } = response.data
            api.defaults.headers.common.Authorization = `Bearer ${token}`
            localStorage.setItem("@fipe:token", token)
            setLoading(false)
            toast.success('User logged in successfully')
            navigate("dashboard")
        }
        catch (error) {
            toast.error('Incorrect data')
            console.log(error)
        }
    }

    const userRegister = async (data : IRegisterFormData) => {
        try{
            await api.post<IRegisterResponse>('/user', data)
            toast.success('User created successfully')
            navigate('login')
        }catch (error){
            toast.error('Email already exists')
            console.error(error)
        }
    }    


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
            setResponseGetCars,
            userRegister,
            loading,
            setLoading,
            signIn
        }}>
            {children}
        </AuthContext.Provider>
    )
}







