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

        .containerValueFIPE{
            padding: 1.5rem;
            background: var(--background);
            border-radius: 5px;
            color: var(--grey5);
            width: 125px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: var(--font-size-5);
            border: 1px solid var(--border);
        }

        .containerValueFIPEFocus{
            padding: 1.5rem;
            background: var(--background);
            border-radius: 5px;
            width: 125px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: var(--font-size-5);
            font-weight: lighter;
            border: 1px solid var(--brand2);
            color: var(--grey5);
        }
    }





    
`