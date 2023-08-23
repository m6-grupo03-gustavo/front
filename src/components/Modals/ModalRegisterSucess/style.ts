import { styled } from "styled-components";


export const StyleModalRegisterSucess = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgb(3, 19, 33, 0.55);
    z-index: 1999;

    article{
        position: absolute;
        transform: translate(-50%, -50%);
        top: 30vh;
        left: 50vw;
        z-index: 2000;
        width: 35rem;
        height: 25rem;
        background: var(--grey9);
        overflow: hidden;
        border-radius: 8px;
        padding: 2rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

       

        header{
            display: flex;
            justify-content: space-between;
            align-items: center;
            h5{
                font-size: var(--font-size-4);
                font-weight: var(--font-weigth-Bold);
                letter-spacing: 2px;
                color: var(--grey0);
            }
            .closeModal{
                border: none;
                width: 20px;
                height: 20px;
                border-radius: 50%;
                position: absolute;
                top: 10px;
                right: 10px;
                color: var(--grey9);
                background-color: black;
                cursor: pointer;
            }
        }
        h6{
            font-size: var(--font-size-3);
            font-weight: var(--font-weigth-Bold);
            letter-spacing: 2px;
            color: var(--grey0);
        }
        p{
            font-size: var(--font-size-4);
            font-weight: var(--font-weigth-Light);
            letter-spacing: 2px;
            color: var(--grey6);
            line-height: 200%;
        }
        .containerBtns{
            display: flex;
            align-items: center;
            gap: 15px;
        }
    }

    @media(min-width: 550px){
 
        article{
            width: 53rem;
        }

    }
`