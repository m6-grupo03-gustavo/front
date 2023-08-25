import { styled } from "styled-components";

export const StyleModalEmail = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgb(3, 19, 33, 0.55);
  z-index: 1999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div {
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50vh;
    left: 50vw;
    z-index: 2000;
    width: 35rem;
    height: 29rem;
    background: var(--grey9);
    overflow: hidden;
    border-radius: 8px;
    padding: 2rem;
    display: flex;
    flex-direction: column;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    justify-content: center;
    margin-bottom: 32px;
    h5 {
      font-size: var(--font-size-4);
      font-weight: var(--font-weigth-Bold);
      letter-spacing: 2px;
      color: var(--grey0);
    }
  }

  p{
            font-size: var(--font-size-5);
            font-weight: var(--font-weigth-Light);
            letter-spacing: 2px;
            color: var(--grey6);
            line-height: 200%;
        }
`;
