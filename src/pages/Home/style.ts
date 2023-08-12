import styled from 'styled-components'

export const StyleHomePage =  styled.main`
    .banner {
        background: url("/Group 28.svg") no-repeat center center;
        background-size: cover;
        
        height: 75vh;
        width: 100vw;        
        
        display: flex;
        align-items: center;
        flex-direction: column;
        
        h1 {
            color: white;
            font-size: 3.2rem;
            margin-top: 8rem;
            line-height: 30px;
        }
        
        h3 {
            font-size: 2rem;
            text-align: center;
            color: white;
            padding: 30px;
            line-height: 30px;
        }

        
    }

    @media(min-width: 700px){
            .banner {
                height: 50vh;
                
                background: linear-gradient(180deg, rgba(0, 0, 0, 0.05), transparent) url("/Photo-background.svg") no-repeat;
            }
        }
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