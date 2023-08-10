import styled from 'styled-components'

export const StyleShowcase =  styled.ul`
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    overflow-x: auto;
    gap: 3rem;
    padding: 50px;
    
   
    @media(min-width: 1200px){
 
        flex-wrap: wrap;
    
}
`