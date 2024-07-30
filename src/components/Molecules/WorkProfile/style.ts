import styled from "@emotion/styled";

export const WorkProfileContainer = styled.div`
  height: 40vh;
  .title {
    font-size: 2rem;
    color: ${(props) => props.theme.palette.myCustomColor.text.secondary};
    font-weight: 600;
    font-family: "Inter", sans-serif;
  }

  .work-content {
    padding-top: 2rem;
    width: 100%;
    display: flex;
  }

  .job-list {
    min-width: fit-content;
    width: 15%;
  }
  .job-info {
    width: 80%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .text-info {
    padding-left: 0.5rem;
  }

  .company-name {
    font-size: 1.25rem;
    color: ${(props) => props.theme.palette.myCustomColor.greys.main};
  }
  .selected-name {
    color: ${(props) => props.theme.palette.myCustomColor.text.secondary};
  }
  span {
    color: ${(props) => props.theme.palette.myCustomColor.text.secondary};
  }

  .duration {
    color: ${(props) => props.theme.palette.myCustomColor.greys.light};
  }
`;

export const ListOptionContainer = styled.div`
  cursor: pointer;
  height: 3rem;
  z-index: 5;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding-right: 1rem;
  .vertical-line {
    width: 0.15rem;
    height: 3rem;
    background-color: ${(props) =>
      props.theme.palette.myCustomColor.greys.dark};
  }
  .selected {
    background-color: ${(props) =>
      props.theme.palette.myCustomColor.text.secondary};
  }

  .company-name {
    color: ${(props) => props.theme.palette.myCustomColor.greys.light};
  }
  .selected-name {
    color: ${(props) => props.theme.palette.myCustomColor.text.secondary};
  }

  :hover {
    background-color: ${(props) =>
      props.theme.palette.myCustomColor.greys.dark};
    .company-name {
      color: ${(props) => props.theme.palette.myCustomColor.text.secondary};
    }
  }
`;

export const JobDescriptionContainer = styled.div`
  color: ${(props) => props.theme.palette.myCustomColor.text.main};
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  .point {
    display: flex;
    gap: 1rem;
    .text {
      color: ${(props) => props.theme.palette.myCustomColor.greys.lighther};
    }
  }
`;
