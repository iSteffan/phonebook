import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Link, List } from './Navigation.styled';

export const Navigation = () => {
  return (
    <>
      <header>
        <List>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/register">Registration</Link>
          </li>
          <li>
            <Link to="/contacts">Contacts</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </List>
      </header>
      <main>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
