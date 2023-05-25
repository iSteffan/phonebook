import { Route, Routes } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { Layout } from 'components/Layout/Layout';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks';
import { refreshUser } from 'redux/auth/authOperations';

const Home = lazy(() => import('../pages/Home'));
const Register = lazy(() => import('../pages/Register'));
const Login = lazy(() => import('../pages/Login'));
const Contacts = lazy(() => import('../pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};
