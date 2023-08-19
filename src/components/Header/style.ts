import { styled } from "styled-components";


export const NavBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    height: 10vh;

    padding: 0px 2.3rem 0px 2.3rem;

    border-bottom: 2px solid var(--grey7);


    #logo {
        cursor: pointer;
    }
`