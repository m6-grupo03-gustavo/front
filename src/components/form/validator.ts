import { z } from "zod"

export enum AccountState {
    Buyer = "buyer",
    Saller = "saller",
  }

export const schemaLogin = z.object({
    email: z.string().email("e-mail invalido"),
    password: z.string().nonempty("Senha é obrigatória")
})

export const schemaRegister = z.object({
    name: z.string(),
    email: z.string().email("e-mail invalido"),
    password: z.string().nonempty("Senha é obrigatória"),
    phone: z.string(),
    cpf: z.string(),
    birthdate: z.string(),
    description: z.string(),
    zipcode: z.string(),
    state: z.string(),
    city: z.string(),
    street: z.string(),
    number: z.number(),
    complement: z.string().optional(),
    account_state: z.enum([AccountState.Buyer, AccountState.Saller])
})

export type ILoginFormData = z.infer<typeof schemaLogin>

export type IRegisterFormData = z.infer<typeof schemaRegister>




