import { useForm } from "react-hook-form"
import { IRestEmailFormData, SchemaRestEmail } from "../validator"
import { zodResolver } from "@hookform/resolvers/zod"
import InputOutlined from "../Input"
import { StyledContainerFormRestEmail } from "./style"
import { BtnSubmit } from "../../Buttons/btnSubmit"
import { useAuth } from "../../../hooks/useAuth"

export const FormEmailResetPassword = () => {

    const { register, handleSubmit, reset, formState: { errors }} = useForm<IRestEmailFormData>({
        resolver: zodResolver(SchemaRestEmail)
    })

    const { resetEmail } = useAuth()

    const submit = (data: IRestEmailFormData) =>{
        resetEmail(data)
        reset()
    }

    return(
        <StyledContainerFormRestEmail>
            <form onSubmit={(handleSubmit(submit))}>
                <h2>Password recovery</h2>
                <span className="text_span">Please provide your email below so that our team can send you a password reset email.</span>
                <InputOutlined id="email" type="text" label="Email" register={register("email")}/>
                {errors.email && <p>{errors.email.message}</p>}
                <BtnSubmit text="Get new password" typeStyle="brand1"/>
                <a href="/login">Back to login</a>
            </form>
        </StyledContainerFormRestEmail>
    )
}