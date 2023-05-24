import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from 'redux/auth/authSlice';
import { logOut } from 'redux/auth/authOperations';

export const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <div>
      <p>{user.name}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};
