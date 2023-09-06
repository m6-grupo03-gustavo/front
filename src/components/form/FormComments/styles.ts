import styled from 'styled-components'


export const StyledContainerFormComment = styled.section`
    form {
        display: flex;
        flex-direction: column;
        gap: 20px;

    }

    textarea {
        height: 100px;
        width: 100%;
        border: 1.5px solid var(--grey9);
        border-radius: 4px;
        resize: none;
        padding: 15px;
        box-sizing: border-box;
        transition: 0.25s;
    }

    textarea::placeholder {
        color: var(--grey6);
        font-family: 'Inter', sans-serif;
        line-height: 20px;
    }

    textarea:focus {
        outline: none;
        border: 1.5px solid var(--brand1);
    }

    button {
        color: white;
        border: none;
        background-color: var(--brand1);
        padding: 1rem 1.5rem;
        border-radius: 4px;
        font-size: var(--font-size-5);
        font-weight: var(--font-weigth-medium);
        text-align: center;
        cursor: pointer;
        width: max-content;
    }

    a {
        color: white;
        border: none;
        background-color: var(--grey6);
        padding: 1rem 1.5rem;
        border-radius: 4px;
        font-size: var(--font-size-5);
        font-weight: var(--font-weigth-medium);
        text-align: center;
        cursor: pointer;
        width: max-content;
        text-decoration: none;
    }
`