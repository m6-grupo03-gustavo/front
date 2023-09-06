import { z } from "zod"

export enum AccountState {
    Buyer = "buyer",
    Seller = "seller",
  }

  
export const schemaLogin = z.object({
    email: z.string().email("e-mail invalido"),
    password: z.string().nonempty("Senha é obrigatória")
})

export const schemaComment = z.object({
    comment: z.string()
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

export type IRegisterComment = z.infer<typeof schemaComment>;




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
    
 
    
    export const SchemaRestEmail = z.object({
        email: z.string()
    })
    
    export type IRestEmailFormData = z.infer<typeof SchemaRestEmail>



export const schemaUpdateUserInfo = z.object({
    name: z.string().optional(),
    email: z.string().email("e-mail invalido").optional(),
    phone: z.string().optional(),
    cpf: z.string().optional(),
    birthdate: z.string().optional(),
    description: z.string().optional(),
})

export type IUpdateUserInfo = z.infer<typeof schemaUpdateUserInfo>

export type IUpdateAdressFormData = z.infer<typeof schemaUpdateAdress>

export const SchemaUpdatePassword = z.object({
        password: z.string(),
        confirm_password: z.string()
    }).refine(data => data.password === data.confirm_password, {
        message: "Passwords do not match",
        path: ["confirm_password"]
    })
    
    export type IUpdatePassword = z.infer<typeof SchemaUpdatePassword>


    export const SchemaUpdatePasswordProvider = z.object({
        password: z.string(),
    })
    
    export type IUpdatePasswordProvider = z.infer<typeof SchemaUpdatePasswordProvider>

    export const schemaUpdateCar = z.object({
        brand: z.string().optional(),
        model: z.string().optional(),
        year: z.string().optional(),
        fuel: z.string().optional(),
        value: z.string().optional(),
        description: z.string().optional(),
        color: z.string().optional(),
        km: z.string().optional(),
        carImages: z.string().optional(),
        is_published: z.string().optional()
    })
    
    export type IUpdateCarFormData =  {
        brand: string
        model: string
        year: string
        fuel: string
        value: number | string
        description: string
        color: string
        km: number | string
        carImages: IImageRequest[] | string
        is_published: boolean | string
    }

    export const isPublisehdOptions = [
        { value: 'true', label: 'Sim' },
        { value:'false', label: 'Não' },
      ]

    export const colorOptions = [
        { value: 'amarelo', label: 'Amarelo' },
        { value: 'azul', label: 'Azul' },
        { value: 'bege', label: 'Bege' },
        { value: 'branco', label: 'Branco' },
        { value: 'cinza', label: 'Cinza' },
        { value: 'prata', label: 'Prata' },
        { value: 'preto', label: 'Preto' },
        { value: 'verde', label: 'Verde' },
        { value: 'vermelho', label: 'Vermelho' },
      ];

     export  const brandOptions = [
        { value: 'chevrolet', label: 'Chevrolet' },
        { value: 'citroën', label: 'Citroën' },
        { value: 'fiat', label: 'Fiat' },
        { value: 'ford', label: 'Ford' },
        { value: 'honda', label: 'Honda' },
        { value: 'hyundai', label: 'Hyundai' },
        { value: 'nissan', label: 'Nissan' },
        { value: 'peugeot', label: 'Peugeot' },
        { value: 'renault', label: 'Renault' },
        { value: 'toyota', label: 'Toyota' },
        { value: 'volkswagen', label: 'Volkswagen' },
      ]
    //All
    //  export  const brandOptions = [
    //     { value: 'audi', label: 'Audi' },
    //     { value: 'BMW', label: 'BMW' },
    //     { value: 'caoa chery', label: 'Caoa Chery' },
    //     { value: 'chevrolet', label: 'Chevrolet' },
    //     { value: 'citroën', label: 'Citroën' },
    //     { value: 'fiat', label: 'Fiat' },
    //     { value: 'ferrari', label: 'Ferrari' },
    //     { value: 'ford', label: 'Ford' },
    //     { value: 'honda', label: 'Honda' },
    //     { value: 'hyundai', label: 'Hyundai' },
    //     { value: 'jeep', label: 'Jeep' },
    //     { value: 'kia', label: 'Kia' },
    //     { value: 'land rover', label: 'Land Rover' },
    //     { value: 'mercedes-benz', label: 'Mercedes-Benz' },
    //     { value: 'mitsubishi', label: 'Mitsubishi' },
    //     { value: 'nissan', label: 'Nissan' },
    //     { value: 'porsche', label: 'Porsche' },
    //     { value: 'peugeot', label: 'Peugeot' },
    //     { value: 'renault', label: 'Renault' },
    //     { value: 'toyota', label: 'Toyota' },
    //     { value: 'volvo', label: 'Volvo' },
    //     { value: 'volkswagen', label: 'Volkswagen' },
    //   ]

     export const fuelOptions = [
        { value: '1', label: 'Gasolina' },
        { value: '2', label: 'Flex' },
        { value: '3', label: 'Elétrico' },
      ]

