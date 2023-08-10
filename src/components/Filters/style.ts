import styled from 'styled-components'

export const StyleModalFilters =  styled.div`


 
        position: absolute;
        transform: translate(-50%, -50%);
        top: 50vh;
        left: 50vw;
        z-index: 999;
        min-height: 80vh;
        width: 350px;
        border-radius: var(--radius1);
        padding: 20px;
        background-color: var(--grey9);
        display: flex;
        flex-direction: column;
        gap: 40px;
        box-shadow: 0px 35px 50px rgb(0, 0, 0, 0.80);
        button{
            border: none;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            position: absolute;
            top: 10px;
            right: 10px;
            color: var(--grey9);
            background-color: black;
        }

`

export const StyleDesktopFilters =  styled.div`
        width: 350px;
        height: 1600px;
        display: flex;
        flex-direction: column;
        /* gap: 40px; */
        background-color: red;
`