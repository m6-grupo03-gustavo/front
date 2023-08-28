import { Route, Routes } from "react-router-dom"
import { Home } from "../pages/Home"
import { Login } from "../pages/Login"
import { Register } from "../pages/Register"
import { Dashboard } from "../pages/Dashboard"
import { ProtectedRoutes } from "./ProtectedRoutes"
import { EmailResetPassword } from "../pages/EmailResetPassword/Email/indext"
import { useAuth } from "../hooks/useAuth"
import { ResetPassword } from "../pages/EmailResetPassword/ResetPassword"
import { ProductPage } from "../pages/ProductPage"




export const RoutesMain = () => {
    const {user} = useAuth()
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/user/resetPassword" element={<EmailResetPassword />} />
            <Route path={`/user/resetPassword/:${user?.reset_token}`} element={<ResetPassword/>} />
            <Route path="/register" element={<Register />} />
            <Route path="/product" element={<ProductPage />} />
            <Route element={<ProtectedRoutes/>}>
                <Route path="/dashboard" element={<Dashboard />} />
            </Route>
        </Routes>
    )
}