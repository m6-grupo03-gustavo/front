import styled from 'styled-components'

export const StyleHomePage =  styled.main`

`

export const StyleContainerShowcaseAndFilters =  styled.div`
        display: flex;
        flex-direction: column-reverse;
        gap: 30px;
        
        section:nth-child(1){
            margin: auto;
        }


        
        
        @media(min-width: 1200px){
            
            flex-direction: row;
            
            section:nth-child(1){
                margin: 0;
                margin-top: 50px;
            }
        }
`


export const StyleShopCars = styled.div`
    /* display: flex;
    flex-direction: column;
    align-items: center; */

`