import styled from "@emotion/styled";

export const MainPaneContainer = styled.div`
  width: 101%;
  z-index: 2;
  /* background-color: ${(props) => props.theme.palette.secondary.dark}; */
  background: transparent;
  overflow-x: hidden;

  .intro {
    height: 100vh;
    padding-left: 5rem;
    display: flex;
    justify-content: center;

    flex-direction: column;
    .greet {
      color: ${(props) => props.theme.palette.myCustomColor.text.secondary};
      font-family: "Inter", sans-serif;
      font-size: 1rem;
    }
    .name {
      color: ${(props) => props.theme.palette.myCustomColor.text.main};
      font-family: "Inter", sans-serif;
      font-size: 4rem;
      font-weight: 700;
    }
    .slogan {
      color: ${(props) => props.theme.palette.myCustomColor.text.dark};
      font-family: "Inter", sans-serif;
      font-size: 2.75rem;
    }
    .description {
      color: ${(props) => props.theme.palette.myCustomColor.text.dark};
      font-family: "Inter", sans-serif;
      font-size: 1rem;
      padding-top: 1rem;
      width: 50%;
      .highlight {
        color: ${(props) => props.theme.palette.myCustomColor.text.secondary};
        font-weight: 700;
      }
    }
  }

  .work-profile,
  .edu-profile,
  .skill-profile {
    padding-top: 5rem;
    padding-bottom: 5rem;
    padding-left: 5rem;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
  }
`;
