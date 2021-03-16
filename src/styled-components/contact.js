import styled from "styled-components";

export const ContactContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  & > div {
    width: 400px;

    .fa {
      color: ${({ theme }) => theme.primary};
      border-radius: 50%;
      padding: 35px 40px;
      background: #111d;
    }
  }
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const TextAlignLeft = styled.div`
  text-align: left;
`;
