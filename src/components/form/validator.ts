import { z } from "zod"

export enum AccountState {
    Buyer = "buyer",
    Seller = "seller",
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
    number: z.string(),
    complement: z.string().optional(),
    account_state:z.string()
})


export const CarImages = z.object({
    url: z.string().url(),
});

export const schemaRegisterCar = z.object({
    brand: z.string(),
    model: z.string(),
    year: z.string(),
    fuel: z.string(),
    value: z.string(),
    description: z.string(),
    color: z.string(),
    km: z.string(),
    // carImages: z.array(z.any())
    carImages: z.string()
})



export type ILoginFormData = z.infer<typeof schemaLogin>

export type IRegisterFormData = z.infer<typeof schemaRegister>



export  interface IImageRequest{
    url: string
}

// Meu input só captura string
// export type IRegisterCarFormData = z.infer<typeof schemaRegisterCar>
export type IRegisterCarFormData = {
        brand: string,
        model: string,
        year: string,
        fuel: string,
        value: number,
        color: string,
        km: number,
        is_published: boolean,
        description: string
        carImages: IImageRequest[]
}


