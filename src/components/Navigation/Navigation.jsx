import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {
  Link,
  List,
  Container,
  Wrapper,
  StyledHeader,
} from './Navigation.styled';

export const Navigation = () => {
  return (
    <>
      <StyledHeader>
        <Container>
          <Wrapper>
            <List>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/contacts">Contacts</Link>
              </li>
            </List>
            <List>
              <li>
                <Link to="/register">Registration</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </List>
          </Wrapper>
        </Container>
      </StyledHeader>
      <main>
        <Container>
          <Suspense>
            <Outlet />
          </Suspense>
        </Container>
      </main>
    </>
  );
};
