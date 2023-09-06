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

    .containerCurrentUser{
        max-width: 250px;
        gap: 15px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        p{
            font-size: 2rem;
            color: black;
            letter-spacing: 2px;
        }
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


    img{
        margin-left: 2rem;
    }

    h1 {
        font-size: var(--font-size-0);
        color: var(--grey9);
        margin-left: 2rem;
        small{
            color: var(--brand3);
        }
    }

    #nav-icon:hover {
        fill: red;
    }

    .containerCurrentUser{
        max-width: 250px;
        display: flex;
        align-items: center;
        gap: 15px;
        justify-content: space-between;
        p{
            font-size: 2rem;
            color: white;
            letter-spacing: 2px;
        }
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
        display: flex;
        align-items: center;
        gap: 2rem;
    }


    #logo {
        cursor: pointer;
    }


`