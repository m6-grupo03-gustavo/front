import styled from 'styled-components'


export const StyledContainerFormLogin = styled.section`
    position: relative;
    width: 35rem;
    /* height: 42rem; */
    height: 40rem;
    background: var(--background);
    overflow: hidden;
    border-radius: var(--radius1);
    border: 1px solid var(--brand1);
    transform-origin: center center;


    form{
        position: absolute;
        inset: 0.4rem;
        background: var(--background);
        padding: 5rem 4rem;
        border-radius: 0.8rem;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        z-index: 3;

        a{
            color: var(--brand3);
            text-decoration: none; 
            padding-top: 1.5rem;
            font-size: var(--font-size-5);
        }
        a:hover{
            color: var(--brand1);
        }

        h2{
            color: var(--brand1);
            font-weight: 500;
            text-align: center;
            letter-spacing: 0.3rem;
            font-size: var(--font-size-1);
            span{
                color: var(--brand3);
                font-size: var(--font-size-2);
            }
        }

    }
`