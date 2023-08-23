import { styled } from "styled-components";


export const StyleModalUpdateAdress= styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgb(3, 19, 33, 0.55);
    z-index: 1999;

    .containerForm{
        position: absolute;
        transform: translate(-50%, -50%);
        top: 50vh;
        left: 50vw;
        z-index: 2000;
        background: var(--grey9);
        padding: 2rem;
        border-radius: var(--radius1);
        display: flex;
        flex-direction: column;
        width: 35rem;
    }


    @media(min-width: 550px){
 
        .containerForm{
            width: 53rem;
        }

    }
`