import styled from "@emotion/styled";

export const SkillsProfile2Wrapper = styled.div`
  display: flex;

  flex-direction: column;
  gap: 1rem;

  .title {
    color: ${(props) => props.theme.palette.myCustomColor.text.secondary};
    font-size: 2rem;
    font-weight: 600;
  }

  .sub-title {
    color: ${(props) => props.theme.palette.myCustomColor.greys.lighther};
    font-size: 1rem;
    font-weight: 600;
  }
  .skill-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    flex-direction: row;
  }
  .sub-grp {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  .grp {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

export const SkillIconWrapper = styled.div`
  height: 3rem;
  width: 3rem;
  padding: 1.5rem;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 0.5rem;
  i {
    font-size: 2rem;
  }
  /* background-color: #007383; */
  background-color: ${(props) => props.theme.palette.secondary.dark};
  color: ${(props) => props.theme.palette.myCustomColor.text.main};
  :hover {
    transform: scale(1.1);
    background-color: ${(props) => props.theme.palette.secondary.dark};
    box-shadow: 0 0 10px rgba(0, 137, 123, 0.3);
  }
`;
