import { styled } from "styled-components";


export const StyleModalRegisterCar = styled.div`
    position: absolute;
    top: 0;
    width: 100vw;
    height: 100vh;
    background: rgb(3, 19, 33, 0.55);
    z-index: 1999;

    article{
        position: absolute;
        transform: translate(-50%, -50%);
        top: 50vh;
        left: 50vw;
        z-index: 2000;
        width: 35rem;
        height: 70rem;
        background: var(--grey9);
        overflow: hidden;
        border-radius: 8px;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 4rem;
    }

`