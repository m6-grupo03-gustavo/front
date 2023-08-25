import styled from 'styled-components'


export const StyledContainerFormRegister = styled.section`
    position: relative;
    width: 35rem;
    height: 70vh;
    overflow-y: auto;
    background: var(--background);
    border-radius: var(--radius1);
    border: 1px solid var(--brand1);
    transform-origin: center center;


    form{
        position: absolute;
        inset: 0.4rem;
        background: var(--background);
        padding: 5rem 3rem;
        border-radius: 0.8rem;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        z-index: 3;

        p{
            color: var(--alert1);
            font-weight: 500;
            text-align: center;
            font-size: var(--font-size-5);
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

        div{
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 15px;
        }

    }
`