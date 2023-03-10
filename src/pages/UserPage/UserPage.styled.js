import styled from 'styled-components';

export const UserInfoContainer = styled.div`
  margin-top: 60px;
  display: flex;
  flex-direction: column;

  background-color: #fdf7f2;
  /* background-color: green; */
  @media screen and (min-width: 768px) {
    margin-top: 160px;
  }
  @media screen and (min-width: 1280px) {
    margin-top: 126px;
    flex-direction: row;
    gap: 32px;
  }
`;
