import { useNavigate } from 'react-router-dom';
import { Wrapper, Greetings } from './Home.styled';
import { useAuth } from 'hooks';
import { Box, Button, ButtonGroup } from '@chakra-ui/react';
import { SlLogin, SlPencil } from 'react-icons/sl';
import { FaUserCircle } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { TiContacts } from 'react-icons/ti';
import { AiOutlineUserAdd } from 'react-icons/ai';

import { SlLogout } from 'react-icons/sl';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useAuth();

  const onSignUp = () => {
    navigate('/register');
  };

  const onContact = () => {
    navigate('/contacts');
  };

  const onLogIn = () => {
    navigate('/login');
  };

  return (
    <>
      <Wrapper>
        {user.name ? (
          <>
            <Box mr={'auto'} ml={'auto'} w={'60px'} mb={'30px'} mt={'20px'}>
              <IconContext.Provider
                value={{
                  color: 'white',
                  size: '4em',
                  marginRight: 'auto',
                  marginLeft: 'auto',
                }}
              >
                <FaUserCircle />
              </IconContext.Provider>
            </Box>
            <Greetings>Welcome {user.name}</Greetings>
            <ButtonGroup
              display={'flex'}
              justifyContent={'space-between'}
              mr={'auto'}
              ml={'auto'}
              w={'255px'}
              mt={'30px'}
            >
              <Button
                colorScheme="blue"
                size="md"
                leftIcon={<TiContacts />}
                onClick={onContact}
              >
                Contacts
              </Button>
              <Button
                colorScheme="blue"
                size="md"
                leftIcon={<SlLogout />}
                onClick={() => dispatch(logOut())}
              >
                Logout
              </Button>
            </ButtonGroup>
          </>
        ) : (
          <>
            <Box mr={'auto'} ml={'auto'} w={'60px'} mb={'30px'} mt={'20px'}>
              <IconContext.Provider
                value={{
                  color: 'white',
                  size: '4em',
                  marginRight: 'auto',
                  marginLeft: 'auto',
                }}
              >
                <AiOutlineUserAdd />
              </IconContext.Provider>
            </Box>
            <Greetings>Welcome, please sign up or log in</Greetings>
            <ButtonGroup
              display={'flex'}
              justifyContent={'space-between'}
              mr={'auto'}
              ml={'auto'}
              w={'255px'}
              mt={'30px'}
            >
              {' '}
              <Button
                colorScheme="blue"
                size="md"
                leftIcon={<SlPencil />}
                onClick={onSignUp}
              >
                Sign up
              </Button>
              <Button
                colorScheme="blue"
                size="md"
                leftIcon={<SlLogin />}
                onClick={onLogIn}
              >
                Log in
              </Button>
            </ButtonGroup>
          </>
        )}
      </Wrapper>
    </>
  );
};

export default Home;
