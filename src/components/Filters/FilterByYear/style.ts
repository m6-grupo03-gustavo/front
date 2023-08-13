


import styled from 'styled-components'

export const StyleFilterByYear =  styled.div`
    h4{
        font-size: var(--font-size-2);
        letter-spacing: 2px;
        margin: 10px 0;

    }

    ul{
        display: flex;
        flex-direction: column;
        gap: 10px;

        li{
            font-size: var(--font-size-4);
            cursor: pointer;
            color: var(--grey5);
            margin-left: 15px;
        }

        li:hover{
            color: var(--brand3);
        }
    }
`