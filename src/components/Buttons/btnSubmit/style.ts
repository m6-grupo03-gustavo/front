import styled, {css} from 'styled-components'


export const StyleContainerSubmit =  styled.button<{ typeStyle: "brand1" | "brand3" | "white" | "delete" | "grey" | "black" }>`
    letter-spacing: 0.2rem;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    padding:  1rem 3rem;
    font-size: var(--font-size-4);
    margin: 2rem;
    /* max-width: 90%; */
    


    ${({typeStyle}) => {
        if(typeStyle == 'brand1'){
            return css`
                border-radius: var(--radius3);
                background-color: var(--brand1);
                color: var(--grey9);
                
                &:hover{
                    background-color: var(--brand3);
                    color: var(--grey0);
                }

            `
        }else if(typeStyle == 'brand3'){
            return css`
            border-radius: var(--radius3);
            background-color: var(--brand3);
            color: var(--grey10);
            
            &:hover{
                background-color: var(--brand1);
                color: var(--grey9);
            }

            `
        }else if(typeStyle == 'white'){
            return css`
            border-radius: var(--radius3);
            background-color: var(--grey10);
            color: var(--grey0);
            border: 1px solid black;
            
            &:hover{
                background-color: var(--grey0);
                color: var(--grey9);
            }

            `
        }else if(typeStyle == 'delete'){
            return css`
            border-radius: var(--radius3);
            background-color: var(--alert2);
            color: var(--alert1);
            
            
            &:hover{
                background-color: var(--alert1);
                color: var(--alert2);
            }

            `
        }else if(typeStyle == 'grey'){
            return css`
            border-radius: var(--radius3);
            background-color: var(--grey6);
            color: var(--grey0);
            
            
            &:hover{
                background-color: var(--grey3);
                color: var(--grey9);
            }

            `
        }else if(typeStyle == 'black'){
            return css`
            border-radius: var(--radius3);
            background-color: var(--grey1);
            color: var(--grey9);
            border: 1px solid black;
            
            &:hover{
                background-color: var(--grey3);
                color: var(--grey9);
            }

            `
        }
    }}
    


    
`