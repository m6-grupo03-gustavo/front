import styled from 'styled-components'


export const StyleBanner =  styled.div`
    height: auto;
    width: 100vw;
    position: relative;
    img{
        width: 100%;
        height: auto;
        background-repeat: no-repeat;
        background-size: auto;
    }
    
    div{
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        z-index: 2;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.4)) ;

        display: flex;
        flex-direction: column;
        gap: 40px;
        align-items: center;
        
        h1{
            margin-top: 3rem;
            color: white;
            font-size: var(--font-size-1);
            letter-spacing: 3px;
        }

        h3{
            color: white;
            font-size: var(--font-size-3);
            letter-spacing: 3px;
            text-align: center;
            padding: 25px;
        }
    }
@media(min-width: 900px){
    height: 70vh;
}
@media(min-width: 1400px){
    img{
        transform: translate(0,-220px);
    }
}
`