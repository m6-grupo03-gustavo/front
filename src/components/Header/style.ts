import { styled } from "styled-components";


export const NavBar = styled.div`
    position: absolute;
    top: 0;
    z-index: 15000;
    display: flex;
    align-items: center;
    justify-content: space-between;

    height: 10vh;
    width: 100vw;
    padding: 0px 2.3rem 0px 2.3rem;

    #logo {
        cursor: pointer;
    }

`


export const NavBarHomePage = styled.div`



    border-bottom: 2px solid var(--grey7);


    #logo {
        cursor: pointer;
    }

`