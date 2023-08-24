import { useForm } from "react-hook-form";
import { IUpdatePassword, SchemaUpdatePassword } from "../validator";
import { zodResolver } from "@hookform/resolvers/zod";
import InputOutlined from "../Input";
import { StyledContainerFormRestEmail } from "../FormResetEmail/style";
import { BtnSubmit } from "../../Buttons/btnSubmit";
import { useAuth } from "../../../hooks/useAuth";

export const FormUpdatePassword = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<IUpdatePassword>({
        resolver: zodResolver(SchemaUpdatePassword)
    });

    const { updatePassword } = useAuth();

    const submit = (data: IUpdatePassword) => {
        if (data.password === data.confirm_password) {
            updatePassword(data.password);
            reset();
        }
    };
    return (
        <StyledContainerFormRestEmail>
            <form onSubmit={handleSubmit(submit)}>
                <h2>Password recovery</h2>
                <span className="text_span">Please provide your email below so that our team can send you a password reset email.</span>
                <InputOutlined id="password" type="password" label="Password" register={register("password")} />
                {errors.password && <p>{errors.password.message}</p>}
                <InputOutlined id="confirm_password" type="password" label="Confirm password" register={register("confirm_password")} />
                {errors.confirm_password && <p>{errors.confirm_password.message}</p>}
                <BtnSubmit text="Get new password" typeStyle="brand1" />
                <a href="/login">Back to login</a>
            </form>
        </StyledContainerFormRestEmail>
    );
};

