import styled from 'styled-components'


export const StyledContainerFormUpdateAdress = styled.section`
    width: 100%;
    height: 100%;
    form{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
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


    }


    
    @media(min-width: 550px){
        
        form{
            align-items: normal;
            div{
            display: flex;
            justify-content: space-between;
            align-items: center;
            }
        }

    }

`