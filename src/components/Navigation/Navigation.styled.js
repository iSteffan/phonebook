import styled from 'styled-components';
import { NavLink as StyledLink } from 'react-router-dom';

export const Link = styled(StyledLink)`
  text-decoration: none;
  color: white;

  &.active {
    color: yellow;
    border-bottom: 1px solid yellow;
  }
`;

export const StyledHeader = styled.header`
  background-color: rgb(40 113 171);
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  padding: 0;
  list-style: none;
  gap: 40px;

  font-size: 24px;

  @media screen and (min-width: 320px) and (max-width: 767px) {
    gap: 20px;
    font-size: 16px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Container = styled.div`
  margin-right: auto;
  margin-left: auto;
  padding-left: 15px;
  padding-right: 15px;
  min-width: 320px;

  @media screen and (min-width: 480px) {
    width: 480px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1200px) {
    width: 1200px;
  }
`;
