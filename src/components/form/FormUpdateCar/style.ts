import styled from 'styled-components'


export const StyledContainerFormUpdateCar = styled.section`
    form{
        width: 32rem;
        display: flex;
        flex-direction: column;
        align-items: center;
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
            max-width: 88%;
        }
    }





    
`