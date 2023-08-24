import { styled } from "styled-components";

export const StyleAdvertising = styled.div`
    position: absolute;
    left: 0;
    bottom: 20px;
    height: 40px;
    width: 88%;
    background: linear-gradient(315deg, transparent 16%, var(--brand3) 16%);
    display: flex;
    align-items: center;

    h2{
        font-size: var(--font-size-4);
        margin-left: 2rem;
        font-family: 'Qwitcher Grypen', cursive;
        /* font-family: inter; */
    }


    @media(min-width: 500px){
        height: 70px;
        bottom: 40px;
        width: 60%;

    }
    @media(min-width: 1200px){
        width: 40%;
        h2{
            font-size: var(--font-size-2);

        }
    }
`