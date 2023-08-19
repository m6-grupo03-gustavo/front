import { styled } from "styled-components";


export const NavBar = styled.div`
    position: absolute;
    top: 0;
    z-index: 1500;
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
    position: absolute;
    top: 0;
    z-index: 1500;
    height: 10vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: space-between;

    #nav-icon:hover {
        fill: red;
    }

    span{
        margin-left: 20px;
        background-color: var(--grey9);
        padding: 1.8rem;
        border-radius: var(--radius1);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .containerLogo{
        background-color: var(--grey9);
        padding: 10px;
        border-radius: 4px;
    }

    .containerToggle{
        margin-right: 20px;
    }

    .containerUserLogout{
        margin-right: 20px;
    }


    #logo {
        cursor: pointer;
    }


`