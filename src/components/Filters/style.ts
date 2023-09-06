import styled from 'styled-components'

export const StyleModalFilters =  styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgb(3, 19, 33, 0.85);
    z-index: 1999;

    .container__modal--filter{
        position: absolute;
        transform: translate(-50%, -50%);
        top: 50vh;
        left: 50vw;
        z-index: 2000;
        width: 35rem;
        max-height: 70rem;
        background: var(--grey9);
        overflow: hidden;
        border-radius: 8px;
        padding: 2rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 4rem;
        overflow-y: auto;

        .container__filters--all{
                height: fit-content;
                width: 100%;
                padding: 1rem;
                margin-top: 20px;
                .container__btn--filter{
                        width: 100%;
                        margin: auto;
                }

        }
    }
    /* span{
            border: none;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            position: absolute;
            top: 10px;
            right: 10px;
            color: var(--grey9);
            background-color: black;
    } */

`

export const StyleDesktopFilters =  styled.div`
        width: 350px;
        height: fit-content;
        display: flex;
        flex-direction: column;
        padding: 10px 20px;
        gap: 20px;
`