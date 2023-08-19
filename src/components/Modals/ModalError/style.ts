import { styled } from "styled-components";


export const StyleModalError = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    background: rgb(3, 19, 33, 0.8);
    z-index: 1999;
    div{
        position: absolute;
        transform: translate(-50%, -50%);
        top: 50vh;
        left: 50vw;
        z-index: 2000;
        width: 350px;
        height: 200px;
        background: var(--grey0);
        overflow: hidden;
        border-radius: 8px;
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 40px;


        h3{
            letter-spacing: 3px;
            font-size: var(--font-size-3);
        }

        button{
            border: none;
            background-color: var(--brand3);
            padding: 15px;
        }

        button:hover{
            background-color: var(--brand1);
        }
    }
`