import { styled } from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;

    background-color: var(--grey0);

    height: 30vh;
    width: 100vw;

    gap: 40px;
    padding: 33px;

    h1 {
        font-size: 3rem;
        color: white;
    }

    p {
        font-size: 1.2rem;
        color: white;
    }

    a {
        padding: 2.5rem;

        background: url("/angle-up.svg") no-repeat center;
        background-color: var(--grey1);

        border-radius: 5px;

        transition: 0.2s;
    }
    
    a:hover {
        transform: translateY(-10px);
    }

    a:target {
        scroll-margin-top: .8em;
    }

    @media (min-width: 1200px) {
        flex-direction: row;

        height: 15vh;

        padding: 60px;
    }
`