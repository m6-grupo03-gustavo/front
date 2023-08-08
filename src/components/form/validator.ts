import { z } from "zod"

export const schemaLogin = z.object({
    email: z.string().email("e-mail invalido"),
    password: z.string().nonempty("Senha é obrigatória")
})

export const schemaRegister = z.object({
    email: z.string().email("e-mail invalido"),
    password: z.string().nonempty("Senha é obrigatória"),
    name: z.string(),
    phone: z.string()
})

export type iLoginFormData = z.infer<typeof schemaLogin>

export type iRegisterFormData = z.infer<typeof schemaRegister>




