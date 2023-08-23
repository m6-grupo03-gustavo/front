import { ReactNode, SetStateAction, createContext, useEffect, useState } from "react"
import { api } from "../service/api"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom";
import { AccountState, ILoginFormData, IRegisterCarFormData, IRegisterFormData } from "../components/Form/validator";


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

interface IUserResponse{
    id: number,
    name: string,
    email: string,
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
    dashboardCars: ICar[]
    setCars: React.Dispatch<React.SetStateAction<ICar[]>>
    setDashboardCars: React.Dispatch<React.SetStateAction<ICar[]>>
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
    userLogout: () => void
    carCreate: (data: IRegisterCarFormData) => Promise<void>
    user: IUserResponse | null
    setUser:  React.Dispatch<SetStateAction<IUserResponse | null>>
    carRemove: (id: number) => Promise<void>
    modalRegisterSucess: boolean
    setModalRegisterSucess: React.Dispatch<SetStateAction<boolean>>
    modalRegisterAdSucess: boolean
    setModalRegisterAdSucess: React.Dispatch<SetStateAction<boolean>>
}

export const AuthContext = createContext({} as iAuthContextValues)

export const AuthProvider = ({ children }: iAuthProviderProps) => {

    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)
    const [modal, setModal] = useState<string>('off')
    const [cars, setCars] = useState<ICar[]>([])
    const [dashboardCars, setDashboardCars] = useState<ICar[]>([])
    const [carsFilter, setCarsFilter] = useState<ICar[]>([])
    const [mobileFilterMain, setMobileFilterMain] = useState<boolean>(false)
    const [page, setPage] = useState<number>(1)
    const [responseGetCars, setResponseGetCars] = useState<IResponseGetCars | null>(null)
    const [user, setUser] = useState<IUserResponse | null>(null)
    const [modalRegisterSucess, setModalRegisterSucess] = useState(false)
    const [modalRegisterAdSucess, setModalRegisterAdSucess] = useState(false)


    useEffect(() => {
        const token = localStorage.getItem("@fipe:token")

        if (!token) {
            setLoading(false)
            return
        }

        api.defaults.headers.common.Authorization = `Bearer ${token}`
        setLoading(false)

    }, [])


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
            setModalRegisterSucess(true)
        }catch (error){
            toast.error('Email already exists')
            console.error(error)
        }
    }    

    const userLogout = () =>{
        window.localStorage.removeItem("@fipe:token")
        toast.success('User Logged Out')
        navigate('/login')
    }

    const carCreate = async (data: IRegisterCarFormData) =>{
        try {
            const token = localStorage.getItem("@fipe:token")
            api.defaults.headers.common.Authorization = `Bearer ${token}`
            await api.post<ICar>("/car", data)
            toast.success('Anuncio criado com sucesso')
            setModal('off')
            setModalRegisterAdSucess(true)
        } catch (error) {
            console.error(error)
            toast.error('Ocorreu um erro')
        }
    }    

    const carRemove = async (id: number) =>{
        try {
            const token = localStorage.getItem("@fipe:token")
            api.defaults.headers.common.Authorization = `Bearer ${token}`
            await api.delete<ICar>(`/car/${id}`)
            toast.success('Anuncio deletado com sucesso')
        } catch (error) {
            console.error(error)
            toast.error('...')
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
            signIn,
            userLogout,
            carCreate,
            user,
            setUser,
            carRemove,
            modalRegisterSucess,
            setModalRegisterSucess,
            modalRegisterAdSucess,
            setModalRegisterAdSucess,
            dashboardCars,
            setDashboardCars
        }}>
            {children}
        </AuthContext.Provider>
    )
}







