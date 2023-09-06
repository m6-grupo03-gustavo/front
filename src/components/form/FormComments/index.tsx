import {SubmitHandler, useForm} from 'react-hook-form'
import { StyledContainerFormComment } from "./styles"
import { IRegisterComment, schemaComment } from '../validator';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAuth } from '../../../hooks/useAuth';
import { Link } from 'react-router-dom';




export default function FormComment (){

    const { register, handleSubmit, reset } = useForm({
        resolver: zodResolver(schemaComment)
    })

    const { registerComment, car, user } = useAuth()  
    
    const submit: SubmitHandler<IRegisterComment> = (data) =>{
        if(car !== null){
            registerComment(data, car.id)
        }
        
        reset()
    }

    return(
        <StyledContainerFormComment>
            <form onSubmit={handleSubmit(submit)}>
                <textarea id="comment" placeholder="Carro muito confortável, foi uma ótima experiência de compra..." {...register('comment')}/>
                {user ? <button type='submit'>Comentar</button> : <Link to={"/login"}>Comentar</Link>}  
            </form>
        </StyledContainerFormComment>
    ) 
}