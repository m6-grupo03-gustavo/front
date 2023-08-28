import { styled } from "styled-components";

export const Container = styled.div`
    margin-top: 10vh;
    width: 100vw;

    background-color: var(--grey8);

    display: flex;
    align-items: center;
    flex-direction: column;

    gap: 200px;

    #theme_color {
        background-color: var(--brand1);
        width: 100vw;
        height: 25vh;
    }

    .sections_container {
        display: flex;
        flex-direction: column;
        gap: 30px;

        margin-bottom: 50px;
    }
`

export const CarMainImage = styled.div`
    position: absolute;
    top: 125px;

    width: 93vw;
    height: 40vh;

    background-color: var(--grey10);

    border-radius: 4px;
    padding: 20px;

    img {
        height: 100%;
        width: 100%;
    }
`

export const CarInfo = styled.div`
    width: 90vw;

    background-color: var(--grey10);

    border-radius: 4px;
    padding: 20px;
    padding-top: 40px;

    display: flex;
    flex-direction: column;
    gap: 30px;

    h1 {
        font-weight: 600;
        font-size: 20px;
    }

    .tags_container {
        display: flex;
        gap: 10px;
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
        padding: 10px;

        width: max-content;
        font-weight: 600;
    }

    p {
        font-weight: 600;
        font-size: 16px;
    }

    a {
        color: white;
        border: none;
        background-color: var(--grey7);
        padding: 1rem 1.5rem;
        border-radius: 4px;
        font-size: var(--font-size-5);
        font-weight: var(--font-weigth-medium);
        text-align: center;
        cursor: pointer;
        width: max-content;
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
`

export const CarDescription = styled.div`
    width: 90vw;

    background-color: var(--grey10);

    border-radius: 4px;
    padding: 20px;
    padding-top: 40px;

    display: flex;
    flex-direction: column;
    gap: 30px;

    h1 {
        font-weight: 600;
        font-size: 20px;
    }

    p {
        font-weight: 500;
        font-size: 16px;
        color: var(--grey4);
        line-height: 27px;
    }
`

export const CarImages = styled.div`
    width: 90vw;

    background-color: var(--grey10);

    border-radius: 4px;
    padding: 20px;
    padding-top: 40px;

    display: flex;
    flex-direction: column;
    gap: 30px;

    h1 {
        font-weight: 600;
        font-size: 20px;
    }

    img {
        height: 100%;
        width: 100%;
    }
`


export const ProfileCard = styled.div`
    width: 90vw;

    background-color: var(--grey10);

    border-radius: 4px;
    padding: 20px;
    padding-top: 40px;
    padding-bottom: 30px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;

    h1 {
        font-weight: 600;
        font-size: 20px;
    }

    p {
        font-weight: 500;
        font-size: 16px;
        color: var(--grey4);
        line-height: 27px;
    }

    .see_all_ads_button {
        background-color: var(--grey0);
        color: white;

        font-weight: 600;
        font-size: 13px;

        border: none;
        border-radius: 4px;

        padding: 15px 20px;
        cursor: pointer;
    }
`