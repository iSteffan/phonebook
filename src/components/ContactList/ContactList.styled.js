import styled from 'styled-components';

export const List = styled.ul`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  list-style: none;
  padding: 0;

  @media screen and (min-width: 480px) {
    width: 400px;
  }
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  outline: 1px solid gray;
  border-radius: 12px;
`;

export const Btn = styled.button`
  height: 40px;
  padding: 5px 10px;
  border-radius: 12px;
`;

export const ContactName = styled.p`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: 500;
`;

export const ContactPhone = styled.p`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: 500;
`;
