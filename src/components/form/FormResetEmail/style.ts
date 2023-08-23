import styled from "styled-components";

export const StyledContainerFormRestEmail = styled.section`
  position: relative;
  width: 35rem;
  /* height: 42rem; */
  height: 42rem;
  background: var(--background);
  overflow: hidden;
  border-radius: var(--radius1);
  border: 1px solid var(--brand1);
  transform-origin: center center;
  display: flex;
  justify-content: center;

  form {
    position: absolute;
    inset: 0.4rem;
    background: var(--background);
    padding: 2rem 4rem 2rem 4rem;
    border-radius: 0.8rem;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    z-index: 3;
    justify-content: center;

    p {
      color: var(--alert1);
      font-weight: 500;
      text-align: center;
      font-size: var(--font-size-4);
    }

    a {
      color: var(--brand3);
      text-decoration: none;
      font-size: var(--font-size-5);
      align-self: center;
    }
    a:hover {
      color: var(--brand1);
    }

    h2 {
      color: var(--brand1);
      font-weight: 500;
      text-align: center;
      letter-spacing: 0.2rem;
      font-size: var(--font-size-1-2);
    }
    span {
      color: var(--brand3);
      font-size: var(--font-size-5);
    }
    .text_span{
        margin-bottom: 25px;
    }
    button{
        margin-top: -10px;
    }
  }
`;
