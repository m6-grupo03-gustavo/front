import styled, { css } from 'styled-components'


export const StyleContainerUserInitials =  styled.div<{ colorByUserId: 0 | 1 | 2 | 3| 4 | 5 }>`

    .initials{
        text-transform: uppercase;
        width: 35px;
        height: 35px;
        border-radius: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: var(--font-size-3);

    }

    ${({colorByUserId}) => {
        if(colorByUserId == 1){
            return css`
                .initials{
                    background-color: var(--random3);
                    color: var(--grey9);
                }

            `
        }else if(colorByUserId == 2){
            return css`
                 .initials{
                    background-color: var(--random6);
                    color: var(--grey9);
                }

            `           
        }else if(colorByUserId == 3){
            return css`
                 .initials{
                    background-color: var(--random9);
                    color: var(--grey9);
                }

            `           
        }else if(colorByUserId == 4){
            return css`
                 .initials{
                    background-color: var(--alert1);
                    color: var(--alert3);
                }

            `           
        }else if(colorByUserId == 5){
            return css`
                 .initials{
                    background-color: var(--random2);
                    color: var(--grey9);
                }

            `           
        }else if(colorByUserId == 0){
            return css`
                 .initials{
                    background-color: var(--random7);
                    color: var(--grey0);
                }

            `           
        }
    }}
    
        
`