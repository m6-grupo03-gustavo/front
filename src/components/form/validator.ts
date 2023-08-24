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


const schemaRegisterWithoutPassword = schemaRegister.omit({ password: true });


export type IRegisterUserResponseFormData = z.infer<typeof schemaRegisterWithoutPassword>;



export  interface IImageRequest{
    url: string
}

//  input só captura string
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
    
    
    
    export const schemaUpdateAdress = z.object({
        zipcode: z.string().optional(),
        state: z.string().optional(),
        city: z.string().optional(),
        street: z.string().optional(),
        number: z.string().optional(),
        complement: z.string().optional(),
    })
    
    export type IUpdateAdressFormData = z.infer<typeof schemaUpdateAdress>
    
    export const SchemaRestEmail = z.object({
        email: z.string()
    })
    
    export type IRestEmailFormData = z.infer<typeof SchemaRestEmail>

    export const SchemaUpdatePassword = z.object({
        password: z.string(),
        confirm_password: z.string()
    }).refine(data => data.password === data.confirm_password, {
        message: "Passwords do not match",
        path: ["confirm_password"]
    });
    
    export type IUpdatePassword = z.infer<typeof SchemaUpdatePassword>

    export const SchemaUpdatePasswordProvider = z.object({
        password: z.string(),
    })
    
    export type IUpdatePasswordProvider = z.infer<typeof SchemaUpdatePassword>


  

