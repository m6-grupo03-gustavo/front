

import styled from 'styled-components'

export const StyleFilterByKM =  styled.div`

    display: flex;
    flex-direction: column;
    width: 100%;
    h4{
        font-size: var(--font-size-2);
        letter-spacing: 2px;
        margin: 10px 0;
    }


`

export const StyledKMInput = styled.section`

        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 30px 0 35px;
        gap: 10px;
        
        div{
            height: 45px;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            
            p{
                font-size: var(--font-size-4);
                width: 100px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            input[type="number"]::-webkit-outer-spin-button,
            input[type="number"]::-webkit-inner-spin-button{
                -webkit-appearance: none;
            }

            input{
                width: 100%;
                height: 100%;
                margin-left: 12px;
                outline: none;
                text-align: center;
                border-radius: var(--radius2);
                border: 1px solid #999;
                font-size: var(--font-size-3);
                -moz-appearance: textfield;
            }

        }
 
`

export const StyleFilterSliderByKM =  styled.div`
    height: 5px;
    width: 300px;
    background-color: var(--grey6);
    border-radius: 5px;
    position: relative;
    div{
        background-color: var(--brand1);
    }
`

export const StyleFilterRangeInput =  styled.div`
    position: relative;
    input{
        position: absolute;
        top: -7px;
        height: 5px;
        width: 100%;
        -webkit-appearance: none;
        background: none;
        pointer-events: none;
    }
    input[type='range']::-webkit-slider-thumb{
        height: 17px;
        width: 17px;
        border-radius: 50%;
        -webkit-appearance: none;
        background: var(--brand1);
        cursor: pointer;
        pointer-events: auto;
    }
    input[type='range']::-moz-range-thumb{
        height: 17px;
        width: 17px;
        border: none;
        border-radius: 50%;
        -moz-appearance: none;
        background: var(--brand1);
        pointer-events: auto;
    }

`