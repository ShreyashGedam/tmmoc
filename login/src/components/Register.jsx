import { Link } from "react-router-dom";
import styled from "styled-components";

export const Register = () => {
  return (
    <Container>
      <h1>Register</h1>
      <Main>
        <Box>
          <h2>Username :</h2>
          <input />
        </Box>
        <Box>
          <h2>Password :</h2>
          <input />
        </Box>
        <button>
          <Link to={"/login"}>Register</Link>
        </button>
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
  height: 50vh;

  button {
    font-size: 18px;
    margin-top: 20px;
    text-decoration: none;
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
