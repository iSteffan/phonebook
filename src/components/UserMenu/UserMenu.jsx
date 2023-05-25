import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { useAuth } from 'hooks';
import { Button } from '@chakra-ui/react';
import { SlLogout } from 'react-icons/sl';
import { Wrapper, Name } from './UserMenu.styled';
import { FaRegUser } from 'react-icons/fa';
import { IconContext } from 'react-icons';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Wrapper>
      <IconContext.Provider value={{ color: 'white', size: '1.5em' }}>
        <FaRegUser />
      </IconContext.Provider>
      <Name>{user.name}</Name>
      <Button
        colorScheme="blue"
        size="md"
        leftIcon={<SlLogout />}
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </Wrapper>
  );
};
