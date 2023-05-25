import { Suspense } from 'react';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { Outlet } from 'react-router-dom';
import {
  Link,
  List,
  Container,
  Wrapper,
  StyledHeader,
} from './Navigation.styled';
import { useAuth } from 'hooks';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <StyledHeader>
        <Container>
          <Wrapper>
            <List>
              <li>
                <Link to="/">Home</Link>
              </li>
              {isLoggedIn && (
                <li>
                  <Link to="/contacts">Contacts</Link>
                </li>
              )}
            </List>
            {isLoggedIn ? (
              <UserMenu />
            ) : (
              <List>
                <li>
                  <Link to="/register">Registration</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
              </List>
            )}
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
