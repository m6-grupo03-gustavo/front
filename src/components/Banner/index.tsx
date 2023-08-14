import { StyleBanner } from "./style"
import banner from '../../../public/Photo-background.svg';

export const Banner = () =>{
    return(
        <>
            <StyleBanner>
                <img src={banner} alt="car banner" />
            </StyleBanner>
            {/* <h1>Motors Shop</h1>
            <h3>A melhor plataforma de anúncios de carros do país</h3> */}
        </>
    )
}