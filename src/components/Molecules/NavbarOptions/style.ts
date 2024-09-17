// src/components/NavbarOptionsContainer.tsx
import styled from "@emotion/styled";

export const NavbarOptionsContainer = styled.div`
  z-index: 2;
  display: flex;
  justify-content: space-around;
  gap: 2rem;
  align-items: center;
  color: ${(props) => props.theme.palette.myCustomColor.text.main};
  .option-text {
    font-family: "Inter", sans-serif;
  }
  a {
    display: flex;
    gap: 0.25rem;
    text-decoration: none;
    color: ${(props) => props.theme.palette.myCustomColor.text.main};
    cursor: pointer;
  }

  a:hover {
    color: ${(props) => props.theme.palette.myCustomColor.text.secondary};
  }

  .menu-listt {
    position: absolute;
    top: 0;
    right: 0;
    background-color: ${(props) => props.theme.palette.secondary.dark};
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 5rem;
    gap: 1rem;
    .divi {
      width: 80%;
      height: 1px;
      background-color: ${(props) =>
        props.theme.palette.myCustomColor.text.main};
    }
  }
  @media (max-width: 768px) {
    height: 3rem;
  }
`;
