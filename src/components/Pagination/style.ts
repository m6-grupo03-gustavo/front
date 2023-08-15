import styled from 'styled-components'

export const StylePagination =  styled.div`

    padding-top: 3rem;
    width: 100%;
    height: 50px;
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
    p{
        font-size: var(--font-size-3);
        color: var(--brand1);
        border-bottom: 1px solid;
    }

    span{
        letter-spacing: 0.2rem;
        overflow: hidden;
        border: none;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 1rem;
        font-size: var(--font-size-3);
        color: var(--grey6);
    }

    button{
        letter-spacing: 0.2rem;
        overflow: hidden;
        border: none;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 1rem;
        font-size: var(--font-size-3);
        color: var(--brand2);
    }

    button:hover{
        color: var(--random4);
    }
`