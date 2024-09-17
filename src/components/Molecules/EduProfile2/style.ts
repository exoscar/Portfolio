import styled from "@emotion/styled";

export const EduProfileWrapper = styled.div`
  .title {
    color: ${(props) => props.theme.palette.myCustomColor.text.secondary};
    font-size: 2rem;
    font-weight: 600;
  }
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const EduCardWrapper = styled.div`
  display: flex;
  flex-direction: column;

  padding: 1.5rem;
  border-radius: 10px;
  .institute-title {
    color: ${(props) => props.theme.palette.myCustomColor.text.secondary};
    font-size: 1rem;
    font-weight: 600;
  }
  .edu-title {
    color: ${(props) => props.theme.palette.myCustomColor.text.main};
    font-size: 1rem;
    font-weight: 600;
  }

  color: ${(props) => props.theme.palette.myCustomColor.text.main};

  /* background-color: #007383; */
  background-color: ${(props) => props.theme.palette.secondary.dark};

  :hover {
    transform: scale(1.01);
    box-shadow: 0 0 10px rgba(0, 137, 123, 0.3);
  }
`;
