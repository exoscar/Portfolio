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
  }
  .domain {
    padding: 1rem;
   
  }
`;
