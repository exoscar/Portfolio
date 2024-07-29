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
    cursor: default;
  }

  a:hover {
    color: ${(props) => props.theme.palette.myCustomColor.text.secondary};
  }
`;
