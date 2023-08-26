import { styled } from "styled-components";

export const Container = styled.div`
    margin-top: 10vh;
    height: 90vh;
    width: 100vw;

    background-color: var(--grey8);

    display: flex;
    align-items: center;
    flex-direction: column;

    gap: 250px;

    #theme_color {
        background-color: var(--brand1);
        width: 100vw;
        height: 25vh;
    }
`

export const ProfileInfo = styled.div`
    position: absolute;
    top: 150px;

    width: 90vw;

    background-color: var(--grey9);

    border-radius: 4px;
    padding: 20px;

    display: flex;
    flex-direction: column;
    gap: 25px;

    h1 {
        font-size: var(--font-size-2);
    }
    
    #profile_name{
        display: flex;
        gap: 20px;
    }

    .header_profile{
        display: flex;
        justify-content: space-between;

        .containerUpdate{
            display: flex;
            gap: 40px;

            .figureUpdate{
                display: flex;
                gap: 5px;
                align-items: center;

                p{
                    font-size: var(--font-size-4);
                    color: var(--grey0);
                    cursor: pointer;
                }
            }
        }
    }
    span {
        font-size: var(--font-size-5);
        font-weight: var(--font-weight-Bold);

        color: var(--brand1);
        background-color: var(--brand4);

        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 4px;
        padding: 5px;
    }

    p {
        font-size: var(--font-size-4);
        font-weight: 400;
        line-height: 22px;
        color: var(--grey4);
    }

    button {
        color: var(--brand1);
        border: 1.5px solid var(--brand1);
        background-color: transparent;
        padding: 1rem 1.5rem;
        border-radius: 4px;
        font-size: var(--font-size-4);
        font-weight: var(--font-weigth-Bold);
        text-align: center;
        cursor: pointer;
        width: 150px;
    }
`

export const ProfileAdsList = styled.ul`
    height: 100%;
    width: 100%;
`