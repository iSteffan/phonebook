import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { useAuth } from 'hooks';
import { Button, Box } from '@chakra-ui/react';
import { SlLogout } from 'react-icons/sl';
import { FaRegUser } from 'react-icons/fa';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Box display="flex" alignItems="center" gap="5px">
      <Box
        display="flex"
        gap="5px"
        alignItems="center"
        color={'white'}
        height={{ base: '24px', md: '33px' }}
        fontSize={{ base: '16px', md: '24px' }}
        // size={'1.5em'}
      >
        <FaRegUser />
        {user.name}
      </Box>
      <Button
        colorScheme="blue"
        size={{ base: 'xs', md: 'lg' }}
        leftIcon={<SlLogout />}
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </Box>
  );
};
