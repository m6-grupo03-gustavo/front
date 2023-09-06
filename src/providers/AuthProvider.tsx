import { 
    ReactNode, 
    SetStateAction, 
    createContext, 
    useEffect, 
    useState 
} from "react"
import { api } from "../service/api"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom";
import { 
    AccountState,
    ILoginFormData, 
    IRegisterCarFormData, 
    IRegisterFormData, 
    IRestEmailFormData, 
    IUpdateAdressFormData, 
    IUpdateUserInfo,
    IUpdatePassword,
    IRegisterComment,
} from "../components/Form/validator";




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
    reset_token: string
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
    user: IRegisterResponse
}

export interface IResponseGetCars{
    prevPage: string | null
    nextPage: string | null
    count: number
    data: ICar[]
}


// interface carsFIPE
export interface ICarFIPE{
    name: string
}

export interface IAllCarFIPE{
    chevrolet: ICarFIPE[]
    citroën: ICarFIPE[]
    fiat: ICarFIPE[]
    ford: ICarFIPE[]
    honda: ICarFIPE[]
    hyundai: ICarFIPE[]
    nissan: ICarFIPE[]
    peugeot: ICarFIPE[]
    renault: ICarFIPE[]
    toyota: ICarFIPE[]
    volkswagen: ICarFIPE[]
}

export interface ICarFIPEDetail{
    id: string
    name: string
    bran: string
    year: string
    fuel: 1 | 2 | 3
    value: number
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
    modalUpdateAdress: boolean
    setModalUpdateAdress: React.Dispatch<SetStateAction<boolean>>
    adressUpdate: (data: IUpdateAdressFormData, id: number) => Promise<{
        zipcode?: string | undefined;
        state?: string | undefined;
        city?: string | undefined;
        street?: string | undefined;
        number?: string | undefined;
        complement?: string | undefined;
        request?: IUserResponse;
    } | undefined>
    resetEmail: (data: IRestEmailFormData) => Promise<void>
    updatePassword: (data: IUpdatePassword) => Promise<void>
    modalUpdateUserInfo: boolean
    setModalUpdateUserInfo: React.Dispatch<SetStateAction<boolean>>
    userInfoUpdate: (data: IUpdateUserInfo, id: number) => Promise<{
        name?: string | undefined;
        email?: string | undefined;
        phone?: string | undefined;
        cpf?: string | undefined;
        birthdate?: string | undefined;
        description?: string | undefined;
        request?: IUserResponse;
    } | undefined>
    setEmaiModal: React.Dispatch<SetStateAction<boolean>>
    emailModal: boolean
    car: ICar | null
    setCar: React.Dispatch<SetStateAction<ICar | null>>
    registerComment: (data: IRegisterComment, id: number) => Promise<void>
    modalRemoveUser: boolean
    setModalRemoveUser: React.Dispatch<SetStateAction<boolean>>
    userRemove: (id: number) => Promise<void>
    carUpdate: (data: IUpdateUserInfo, id: number) => Promise<{
        name?: string | undefined;
        email?: string | undefined;
        phone?: string | undefined;
        cpf?: string | undefined;
        birthdate?: string | undefined;
        description?: string | undefined;
        request?: ICar;
    } | undefined>
    carsTableFIPE: IAllCarFIPE | null
    setCarsTableFIPE: React.Dispatch<SetStateAction<IAllCarFIPE | null>>
    carsTableFIPEByBranch: ICarFIPEDetail[] | null
    setCarsTableFIPEByBranch: React.Dispatch<SetStateAction<ICarFIPEDetail[] | null>>
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
    const [modalUpdateAdress, setModalUpdateAdress] = useState(false)
    const [modalUpdateUserInfo, setModalUpdateUserInfo] = useState(false)
    const [car, setCar] = useState<ICar | null>(null)
    const [modalRemoveUser, setModalRemoveUser] = useState(false)

    const [carsTableFIPE, setCarsTableFIPE ] = useState<IAllCarFIPE | null>(null)
    const [carsTableFIPEByBranch, setCarsTableFIPEByBranch ] = useState<ICarFIPEDetail[] | null>(null)

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
            // api.defaults.headers.common.Authorization = `Bearer ${token}`
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
            console.log(error)
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

    const userRemove = async (id: number) =>{
        try {
            const token = localStorage.getItem("@fipe:token")
            api.defaults.headers.common.Authorization = `Bearer ${token}`
            await api.delete<ICar>(`/user/${id}`)
            toast.success('Usuário deletado com sucesso')
            window.localStorage.removeItem("@fipe:token")
            navigate('/')
        } catch (error) {
            console.error(error)
            toast.error('...')
        }
    }

    const carUpdate= async (data: IUpdateUserInfo, id: number) =>{
        try {
            const token = localStorage.getItem("@fipe:token")
            api.defaults.headers.common.Authorization = `Bearer ${token}`
            const response = await api.patch(`/car/${id}`, data)
            toast.success('Car updated successfully')
            return {...response, ...data}
        } catch (error) {
            toast.error('Unable to update')
            console.error(error)
        }
    }


    const adressUpdate= async (data: IUpdateAdressFormData, id: number) =>{
        try {
            const token = localStorage.getItem("@fipe:token")
            api.defaults.headers.common.Authorization = `Bearer ${token}`
            const response = await api.patch(`/user/${id}`, data)
            toast.success('Adress updated successfully')
            setModalUpdateAdress(false)
            location.reload()
            return {...response, ...data}
        } catch (error) {
            toast.error('Unable to update')
            console.error(error)
        }
    }

    const userInfoUpdate= async (data: IUpdateUserInfo, id: number) =>{
        try {
            const token = localStorage.getItem("@fipe:token")
            api.defaults.headers.common.Authorization = `Bearer ${token}`
            const response = await api.patch(`/user/${id}`, data)
            toast.success('Adress updated successfully')
            setModalUpdateUserInfo(false)
            location.reload()
            return {...response, ...data}
        } catch (error) {
            toast.error('Unable to update')
            console.error(error)
        }
    }

    const [emailModal, setEmaiModal] = useState(false)

    const resetEmail = async (data: IRestEmailFormData) => {
        try{
            const response = await api.post("/user/resetUserPassword", data)
            if(response.data.message){
                setEmaiModal(true)
                const getUser = await api.get("/user")
                const toSetUser = getUser.data.find((user: IUserResponse)=> user.email === data.email)
                localStorage.setItem("@reset:token", toSetUser.reset_token)
                setUser(toSetUser)
                toast.success(response.data.message)

                if(emailModal){
                    setTimeout(() => {
                        setEmaiModal(false)
                    }, 5000)
                }
            }
        }catch (error) {
            console.log(error)
            toast.error("Ocorreu um erro")
        }
    }

    const updatePassword = async (data: IUpdatePassword ) =>{
        const restToken = localStorage.getItem("@reset:token")
        try{
            const response = await api.patch(`/user/resetUserPassword/${restToken}`, data)
            console.log(response)
            localStorage.removeItem("@reset:token")
            toast.success(response.data.message)
        }catch(error){
            console.log(error)
            toast.error("Ocorreu um erro")
        }
    }

    const registerComment = async (data : IRegisterComment, id: number) => {
        try{
            await api.post<IRegisterComment>(`/comments/${id}`, data)
            toast.success('Comment created successfully')
        }catch (error){
            toast.error('Comentário excedeu o limite de caracteres')
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
            setDashboardCars,
            modalUpdateAdress,
            setModalUpdateAdress,
            adressUpdate,
            resetEmail,
            modalUpdateUserInfo,
            setModalUpdateUserInfo,
            userInfoUpdate,
            updatePassword,
            setEmaiModal,
            emailModal,
            car,
            setCar,
            modalRemoveUser,
            setModalRemoveUser,
            userRemove,
            carUpdate,
            carsTableFIPE,
            setCarsTableFIPE,
            carsTableFIPEByBranch,
            setCarsTableFIPEByBranch,
            registerComment,
        }}>
            {children}
        </AuthContext.Provider>
    )
}







