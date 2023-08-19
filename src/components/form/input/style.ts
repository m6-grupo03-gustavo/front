import styled from 'styled-components'

export const StyleFieldset =  styled.fieldset`
    position: relative;
    width: 28rem;
    padding: 1rem;
   
    input{

        width: 88%;
        padding: 1.5rem;
        background: var(--background);
        border-radius: 5px;
        outline: none;
        color: var(--grey0);
        font-size:var(--font-size-5);
        border: 1px solid var(--border);
    }

    span{
        position: absolute;
        left: 0;
        top: 1.2rem;
        padding: 1.5rem 2.5rem;
        pointer-events: none;
        font-size: var(--font-size-5);
        color: var(--grey6);
        transition: 0.5s;
    }

    input:valid ~ span,
    input:focus ~ span{
        color: var(--brand1);
        transform: translateX(2rem) translateY(-0.5rem);
        font-size: var(--font-size-6);
        padding: 0 1rem;
        background: var(--background);
        border-left: 1px solid var(--brand1);
        border-right: 1px solid var(--brand1);
        letter-spacing: 0.2rem;
    }

    
    input:valid,
    input:focus {
        border: 1px solid var(--brand3);
    }
`