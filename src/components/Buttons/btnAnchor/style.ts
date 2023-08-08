import styled, {css} from 'styled-components'


export const StyleContainerAnchor =  styled.div<{ typeStyle: "brand1" | "brand3" | "white" | "delete" | "grey" | "black" }>`
    letter-spacing: 0.2rem;
    overflow: hidden;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem;
    font-size: var(--font-size-3);


    ${({typeStyle}) => {
        if(typeStyle == 'brand1'){
            return css`
                min-width: 10rem;
                a{
                    border-radius: var(--radius3);
                    background-color: var(--brand1);
                    border: 1px solid rgb(237, 242, 255, 0.4);
                    margin: 0;
                    padding:  1rem 3rem;
                    color: var(--grey9);
                }
                a:hover{
                    background-color: var(--brand3);
                    color: var(--grey0);
                }

            `
        }else if(typeStyle == 'brand3'){
            return css`
                min-width: 10rem;
                a{
                    border-radius: var(--radius3);
                    background-color: var(--brand3);
                    border: 1px solid rgb(237, 242, 255, 0.4);
                    margin: 0;
                    padding: 1rem 3rem;
                    color: var(--grey9);
                }
                a:hover{
                    background-color: var(--brand1);
                    color: var(--grey9);
                }
            `
        }else if(typeStyle == 'white'){
            return css`
                 min-width: 10rem;
                 a{
                     border-radius: var(--radius3);
                     border: 1px solid black;
                     background-color: var(--grey10);
                     margin: 0;
                     padding:  1rem 3rem;
                     color: var(--grey0);
                }
                a:hover{
                    background-color: var(--grey0);
                    color: var(--grey9);
                }
            `
        }else if(typeStyle == 'delete'){
            return css`
                 min-width: 10rem;
                 
                 a{
                    border-radius: var(--radius3);
                     background-color: var(--alert2);
                     color: var(--alert1);
                     border: 1px solid rgb(237, 242, 255, 0.4);
                     margin: 0;
                     padding: 1rem 3rem;

                }
                a:hover{
                    background-color: var(--alert1);
                    color: var(--alert2);                    
                }
            `
        }else if(typeStyle == 'grey'){
            return css`
                 min-width: 10rem;
                 a{
                    border-radius: var(--radius3);
                     background-color: var(--grey6);
                     color: var(--grey0);
                     margin: 0;
                     padding: 1rem 3rem;
                }
                a:hover{
                    background-color: var(--grey3);
                    color: var(--grey9);
                }
            `
        }else if(typeStyle == 'black'){
            return css`
                 min-width: 10rem;
                 
                 a{
                    border-radius: var(--radius3);
                    background-color: var(--grey1);
                    color: var(--grey9);
                     margin: 0;
                     padding: 1rem 3rem;
                }
                a:hover{
                    background-color: var(--grey3);
                    color: var(--grey9);
                }
            `
        }
    }}
    


    
`