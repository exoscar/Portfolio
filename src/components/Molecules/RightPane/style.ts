import styled from "@emotion/styled";

export const RightPaneContainer = styled.div`
  z-index: 2;
  width: 150px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  /* background-color: ${(props) => props.theme.palette.secondary.dark}; */
  background: transparent;
  .email {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    transform: rotate(90deg);
    position: absolute;
    bottom: 9rem;
  }
  .email-text {
    color: ${(props) => props.theme.palette.myCustomColor.text.main};
    font-family: "Inter", sans-serif;
    text-transform: lowercase;
  }
  .vertical-line {
    height: 0.1rem;
    width: 6rem;
    background-color: ${(props) => props.theme.palette.myCustomColor.text.main};
  }
`;
