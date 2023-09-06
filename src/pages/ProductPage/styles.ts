import { styled } from "styled-components";

export const Container = styled.div`
    margin-top: 10vh;
    width: 100vw;

    background-color: var(--grey8);

    display: flex;
    align-items: center;
    flex-direction: column;

    gap: 200px;

    #theme_color {
        background-color: var(--brand1);
        width: 100vw;
        height: 25vh;
    }

    .sections_container {
        display: flex;
        flex-direction: column;
        gap: 30px;

        margin-bottom: 50px;
    }

    .container_main_sections {
        display: flex;
        flex-direction: column;
        gap: 30px;

        width: 100%;
    }

    .section_one {
        padding: 15px;
    }

    .section_two {
        padding: 15px;
        display: flex;
        flex-direction: column;
        gap: 30px;
    }

    @media (min-width: 1200px) {
        .container_main_sections {
            flex-direction: row;
            padding: 0px 300px;
        }

        .section_one {
            width: 70%;
        }

        .section_two {
            width: 30%;
        }
    }
`

export const CarMainImage = styled.div`
    position: absolute;
    top: 125px;

    width: 93vw;
    height: 40vh;

    background-color: white;

    border-radius: 4px;
    padding: 20px;
    
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        height: 210px;
        width: 320px;
    }

    @media (min-width: 1200px) {
        max-width: 50.4vw;

        img {
            height: 350px;
            width: 600px;
        }
    }
`

export const CarInfo = styled.div`
    width: 100%;

    background-color: var(--grey10);

    border-radius: 4px;
    padding: 20px;
    padding-top: 30px;

    display: flex;
    flex-direction: column;
    gap: 30px;

    h1 {
        font-weight: 600;
        font-size: 20px;
    }

    .tags_container {
        display: flex;
        gap: 10px;
    }

    span {
        font-size: var(--font-size-5);
        font-weight: var(--font-weight-Bold);

        color: var(--brand1);
        background-color: var(--brand4);

        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 4px;
        padding: 10px;

        width: max-content;
        font-weight: 600;
    }

    p {
        font-weight: 600;
        font-size: 16px;
    }

    a {
        color: white;
        border: none;
        background-color: var(--grey7);
        padding: 1rem 1.5rem;
        border-radius: 4px;
        font-size: var(--font-size-5);
        font-weight: var(--font-weigth-medium);
        text-align: center;
        cursor: pointer;
        width: max-content;
    }

    button {
        color: white;
        border: none;
        background-color: var(--brand1);
        padding: 1rem 1.5rem;
        border-radius: 4px;
        font-size: var(--font-size-5);
        font-weight: var(--font-weigth-medium);
        text-align: center;
        cursor: pointer;
        width: max-content;
    }
`

export const CarDescription = styled.div`
    width: 100%;

    background-color: var(--grey10);

    border-radius: 4px;
    padding: 20px;
    padding-top: 30px;

    display: flex;
    flex-direction: column;
    gap: 30px;

    h1 {
        font-weight: 600;
        font-size: 20px;
    }

    p {
        font-weight: 500;
        font-size: 16px;
        color: var(--grey4);
        line-height: 27px;
    }
`

export const CarImages = styled.div`
    width: 100%;
    height: 450px;

    background-color: var(--grey10);

    border-radius: 4px;
    padding: 20px;
    padding-top: 30px;

    display: flex;
    flex-direction: column;
    gap: 30px;

    h1 {
        font-weight: 600;
        font-size: 20px;
    }

    img {
        height: 100%;
        width: 100%;
    }

    @media (min-width: 1200px) {
        width: 500px;

        position: absolute;
        top: 125px;
    }
`

export const ProfileCard = styled.div`
    width: 100%;

    background-color: var(--grey10);

    border-radius: 4px;
    padding: 20px;
    padding-top: 30px;
    padding-bottom: 30px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;

    h1 {
        font-weight: 600;
        font-size: 20px;
    }

    p {
        font-weight: 500;
        font-size: 16px;
        color: var(--grey4);
        line-height: 27px;
    }

    .see_all_ads_button {
        background-color: var(--grey0);
        color: white;

        font-weight: 600;
        font-size: 13px;

        border: none;
        border-radius: 4px;

        padding: 15px 20px;
        cursor: pointer;
    }
`

export const CommentsSection = styled.div`
    width: 100%;

    background-color: var(--grey10);

    border-radius: 4px;
    padding: 20px;
    padding-top: 30px;

    display: flex;
    flex-direction: column;
    gap: 30px;

    h1 {
        font-weight: 600;
        font-size: 20px;
    }

    h2 {
        font-size: 14px;
        font-weight: 600;
    }

    ul {
        width: 100%;
        height: 100%;
        
        display: flex;
        flex-direction: column;
        gap: 35px;
    }

    li {
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    span {
        font-size: 9px;
        color: var(--grey6);
    }

    p {
        margin-left: 2px;
        font-size: 12px;
        color: var(--grey4);
        line-height: 25px;
    }

    .circle {
        border-radius: 100%;
        height: 3px;
        width: 3px;
        background-color: var(--grey6);
    }

    .comment_header {
        display: flex;
        gap: 8px;
        align-items: center;
    }
`

export const PostCommentSection = styled.div`
    width: 100%;

    background-color: var(--grey10);

    border-radius: 4px;
    padding: 20px;
    padding-top: 30px;

    display: flex;
    flex-direction: column;
    gap: 20px;

    .post_comment_header {
        display: flex;
        align-items: center;
        gap: 8px;
    }

    h2, a {
        font-size: 14px;
        font-weight: 600;
        color: var(--grey0);
    }

    .sugestions_container {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
    }

    span {
        background-color: var(--grey8);
        color: var(--grey5);

        padding: 5px 10px;
        border-radius: 24px;
        font-size: 10px;
        cursor: pointer;
        margin-bottom: 10px;
    }
`