import { styled } from "styled-components";

export const Container = styled.div`
    margin-top: 10vh;
    position: absolute;
    z-index: 20;

    display: flex;
    flex-direction: column;
    justify-content: center;

    background-color: white;

    width: 100vw;
    transition: 0.5s;

    padding: 2.3rem;
    padding-top: 3rem;
    padding-bottom: 3.3rem;
    gap: 3rem;

    border-top: 2px solid var(--grey7);
    box-shadow: 0px 40px 70px 0px rgba(0,0,0,0.25);

    #login_button {
        font-size: 2rem;
        color: var(--grey4);
        font-weight: var(--font-weigth-Bold);
    }

    #register_button {
        color: var(--grey2);
        border: 1.5px solid var(--grey6);

        padding: 1.5rem;
        border-radius: 4px;

        font-size: 1.8rem;
        font-weight: var(--font-weigth-Bold);
        text-align: center;
    }
`
export const ContainerCurrentUser =  styled.div`

    position: absolute;
    z-index: 20;

    display: flex;
    flex-direction: column;
    justify-content: center;

    background-color: white;

    width: 100vw;
    transition: 0.5s;

    padding: 2.3rem;
    padding-top: 3rem;
    padding-bottom: 3.3rem;
    gap: 3rem;

    border-top: 2px solid var(--grey7);
    box-shadow: 0px 40px 70px 0px rgba(0,0,0,0.25);

    #login_button {
        font-size: 2rem;
        color: var(--grey4);
        font-weight: var(--font-weigth-Bold);
    }

    #register_button {
        color: var(--grey2);
        border: 1.5px solid var(--grey6);

        padding: 1.5rem;
        border-radius: 4px;

        font-size: 1.8rem;
        font-weight: var(--font-weigth-Bold);
        text-align: center;
    }
        
    .userLogout{
        display: flex;
        align-items: center;
        gap: 10px;
        cursor: pointer;
        p{
            font-size: 1.8rem;
            color: black;
        }
    }
`
export const ContainerHomePage = styled.div`
    margin-top: 10vh;
    position: absolute;
    z-index: 20;

    display: flex;
    flex-direction: column;
    justify-content: center;

    backdrop-filter: blur(30px);

    width: 100vw;
    transition: 0.5s;

    padding: 2.3rem;
    padding-top: 3rem;
    padding-bottom: 3.3rem;
    gap: 3rem;

    border-top: 2px solid var(--grey7);
    box-shadow: 0px 40px 70px 0px rgba(0,0,0,0.25);

    
    .userLogout{
        display: flex;
        align-items: center;
        gap: 10px;
        cursor: pointer;
        p{
            font-size: 1.8rem;
            color: white;
        }
    }

    #login_button {
        font-size: 2rem;
        color: var(--grey9);
        font-weight: var(--font-weigth-Bold);
    }

    #register_button {
        color: var(--grey9);
        border: 1.5px solid var(--grey9);

        padding: 1.5rem;
        border-radius: 4px;

        font-size: 1.8rem;
        font-weight: var(--font-weigth-Bold);
        text-align: center;
    }

`

export const NavButtonDesktop = styled.div`
    height: 100%;
    width: 30vw;

    gap: 50px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-left: 2px solid var(--grey7);

    padding: 30px;

    
    #login_button {
        font-size: 2rem;
        color: var(--grey4);
        font-weight: var(--font-weigth-Bold);
    }

    #register_button {
        color: var(--grey2);
        border: 1.5px solid var(--grey6);

        padding: 1.5rem;
        border-radius: 4px;

        font-size: 1.8rem;
        font-weight: var(--font-weigth-Bold);
        text-align: center;

        height: 50px;
        width: 150px;
    }
`

export const NavButtonDesktopHome = styled.div`
    height: 100%;
    width: 30vw;

    gap: 50px;

    display: flex;
    align-items: center;
    justify-content: center;
    /* background-color: white; */
    border-left: 2px solid var(--grey9);

    padding: 30px;

    
    #login_button {
        font-size: 2rem;
        color: var(--grey9);
        font-weight: var(--font-weigth-Bold);
    }

    #register_button {
        color: var(--grey9);
        border: 1.5px solid var(--grey9);

        padding: 1.5rem;
        border-radius: 4px;

        font-size: 1.8rem;
        font-weight: var(--font-weigth-Bold);
        text-align: center;

        height: 50px;
        width: 150px;
    }
`

