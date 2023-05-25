import { useNavigate } from 'react-router-dom';
import { Wrapper, Greetings } from './Home.styled';
import { useAuth } from 'hooks';
import { Button, ButtonGroup } from '@chakra-ui/react';
import { SlLogin, SlPencil } from 'react-icons/sl';
import { FaUserCircle } from 'react-icons/fa';
import { IconContext } from 'react-icons';

const Home = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const onSignUp = () => {
    navigate('/register');
  };

  const onLogIn = () => {
    navigate('/login');
  };

  return (
    <>
      <Wrapper>
        {user.name ? (
          <>
            <IconContext.Provider value={{ color: 'white', size: '3em' }}>
              <FaUserCircle />
            </IconContext.Provider>
            <Greetings>Welcome {user.name}</Greetings>
          </>
        ) : (
          <>
            <Greetings>Welcome dear user, please sign up or log in</Greetings>
            <ButtonGroup spacing="6">
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
