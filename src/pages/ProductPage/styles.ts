import { styled } from "styled-components";

export const Container = styled.div`
    margin-top: 10vh;
    height: 150vh;
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

export const CarMainImage = styled.div`
    position: absolute;
    top: 125px;

    width: 93vw;
    height: 40vh;

    background-color: var(--grey9);

    border-radius: 4px;
    padding: 20px;

    img {
        height: 100%;
        width: 100%;
    }
`

export const CarInfo = styled.div`
    /* position: absolute; */
    /* top: 150px; */

    width: 90vw;

    background-color: var(--grey9);

    border-radius: 4px;
    padding: 20px;

    img {
        height: 100%;
        width: 100%;
    }
`

export const CarDescription = styled.div`
    /* position: absolute; */
    /* top: 150px; */

    width: 90vw;

    background-color: var(--grey9);

    border-radius: 4px;
    padding: 20px;

    img {
        height: 100%;
        width: 100%;
    }
`
