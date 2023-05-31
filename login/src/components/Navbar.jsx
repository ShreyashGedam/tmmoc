import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Navbar = () => {
  const [login, setLogin] = useState(false);

  return (
    <Container>
      <h2>Shreyash</h2>
      {login ? (
        <button>Logout</button>
      ) : (
        <div>
          <button><Link to="/login">Login</Link></button>
          <button>Register</button>
        </div>
      )}
    </Container>
  );
};

const Container = styled.div`
  border: 1px solid;
  width: 90%;
  display: flex;
  margin: auto;
  justify-content: space-between;
  margin-top: 5vh;
  align-items: center;

  h2 {
    padding: 0 20px;
  }

  button {
    height: 40px;
    padding: 0 20px;
    margin: 0 20px;
  }
`;
