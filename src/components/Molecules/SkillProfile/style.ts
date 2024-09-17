import styled from "@emotion/styled";

export const SkillProfileContainer = styled.div`
  .skill-title {
    font-size: 2rem;
    color: ${(props) => props.theme.palette.myCustomColor.text.secondary};
    font-weight: 600;
    font-family: "Inter", sans-serif;
  }

  .domain-container {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    gap: 1rem;
  }
  .domain {
    .domain-title {
      font-size: 1.5rem;
      color: ${(props) => props.theme.palette.myCustomColor.text.secondary};
      font-weight: 600;
      font-family: "Inter", sans-serif;
    }
    padding: 1rem;
    border-radius: 1rem;
    width: 10rem;
    background-color: #00425f;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
  }
`;
