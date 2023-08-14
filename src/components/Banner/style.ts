import styled from 'styled-components'


export const StyleBanner =  styled.div`
    height: 70vh;
    width: 100vw;

    /* background: linear-gradient(180deg, rgba(0, 0, 0, 0.05), transparent) url(carBanner) no-repeat ; */
    /* background-size: cover; */
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(360deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2)) ;
@media(min-width: 700px){
    height: 50vh;
}
`