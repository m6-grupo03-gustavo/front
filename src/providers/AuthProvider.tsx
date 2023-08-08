import { ReactNode, createContext, useState } from "react"

interface iAuthProviderProps {
    children: ReactNode
}

interface iAuthContextValues {
    modal: string
    setModal: React.Dispatch<React.SetStateAction<string>>
}

export const AuthContext = createContext({} as iAuthContextValues)

export const AuthProvider = ({ children }: iAuthProviderProps) => {


    const [modal, setModal] = useState<string>('off')

    



    return (
        <AuthContext.Provider value={{ 
            modal,
            setModal
        }}>
            {children}
        </AuthContext.Provider>
    )
}







