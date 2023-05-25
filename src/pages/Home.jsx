import { useNavigate } from 'react-router-dom';
import { StyledButton, Wrapper, List } from './Home.styled';
// import { useAuth } from 'hooks';

const Home = () => {
  const navigate = useNavigate();
  // const { user } = useAuth();

  const onSignUp = () => {
    navigate('/register');
  };

  const onLogIn = () => {
    navigate('/login');
  };

  // console.log(user.name);

  return (
    <>
      <Wrapper>
        <h1>Welcome dear user, please sign up or log in</h1>
        <List>
          <li>
            <StyledButton variant="contained" onClick={onSignUp}>
              Sign up
            </StyledButton>
          </li>
          <li>
            <StyledButton variant="contained" onClick={onLogIn}>
              Log in
            </StyledButton>
          </li>
        </List>
      </Wrapper>
    </>
  );
};

export default Home;
