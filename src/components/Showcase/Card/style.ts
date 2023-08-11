import styled from 'styled-components'

export const StyleCardCar =  styled.li`
    min-width: 31.2rem;
    height: 35rem;
    background-color: var(--background);
    color: var(--grey0);
    box-shadow: 0px 35px 50px rgb(0, 0, 0, 0.55);
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media(min-width: 800px){
        width: 31.2rem;
    }
`


export const StyleContainerImage = styled.div`
    height: 40%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    img{

        width: 100%;
    }
`

export const StyleContainerCarInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    h3{
        font-size: var(--font-size-3);
    }
    
    p{
        font-size: var(--font-size-4);
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        line-height: 150%;
        color: var(--grey5);
    }
    `

export const StyleContainerUserIfo = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;

    h6{
        font-size: var(--font-size-4);
        color: var(--grey5);
        
    }
`

export const StyleContainerDetailCar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    div{
        display: flex;
        align-items: center;
        gap: 10px;
        span{
            
            font-size: var(--font-size-4);
            background-color: var(--brand4);
            color: var(--brand2);
            padding: 5px;
        }
    }
    p{
        font-size: var(--font-size-3);
        font-weight: var(--font-weigth-Bold);

    }
`