import { ReactNode, createContext, useState } from "react"

interface iAuthProviderProps {
    children: ReactNode
}

export interface ICar {
    id: number,
    name: string,
    brand: string,
    model: string,
    year: string,
    fuel: string,
    value: number,
    description: string
    is_published: boolean
    user_id: number
}

interface iAuthContextValues {
    modal: string
    setModal: React.Dispatch<React.SetStateAction<string>>
    cars: ICar[]
    setCars: React.Dispatch<React.SetStateAction<ICar[]>>
}

export const AuthContext = createContext({} as iAuthContextValues)

export const AuthProvider = ({ children }: iAuthProviderProps) => {


    const [modal, setModal] = useState<string>('off')
    const [cars, setCars] = useState<ICar[]>([])
    



    return (
        <AuthContext.Provider value={{ 
            modal,
            setModal,
            cars,
            setCars
        }}>
            {children}
        </AuthContext.Provider>
    )
}







