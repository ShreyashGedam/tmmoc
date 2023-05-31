import { Link } from "react-router-dom";
import styled from "styled-components";

export const Login = () => {
  console.log("Login page");
  return (
    <Container>
      <h1>Login</h1>
      <Main>
        <Box>
          <h2>Username :</h2>
          <input />
        </Box>
        <Box>
          <h2>Password :</h2>
          <input />
        </Box>
        <ButtonBox>
          <button style={{ marginBottom: "20px" }}>
            <Link to="http://localhost:8080/auth/callback">Google Login</Link>
          </button>
        </ButtonBox>
      </Main>
    </Container>
  );
};

const Container = styled.div`
  text-align: center;
`;

const Main = styled.div`
  border: 1px solid;
  margin: auto;
  margin-top: 20px;
  width: 30%;

  button {
    font-size: 20px;
    width: 100px;
    margin: auto;
    margin-top: 20px;
  }
`;

const Box = styled.div`
  display: flex;
  align-items: center;

  h2 {
    width: 30%;
  }

  input {
    height: 30px;
  }
`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
`;
