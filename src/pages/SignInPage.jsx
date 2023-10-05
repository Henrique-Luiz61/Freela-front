import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../contexts/authContext";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setToken, setUserId } = useContext(AuthContext);

  const navigate = useNavigate();

  function signIn(e) {
    e.preventDefault();

    const newLogin = {
      email: email,
      password: password,
    };

    const promise = axios.post(
      `${import.meta.env.VITE_API_URL}/signin`,
      newLogin
    );

    promise.then((res) => {
      const { token, userId } = res.data;
      setToken(token);
      setUserId(userId);
      localStorage.setItem("user", JSON.stringify({ token, userId }));

      navigate("/home");
    });
    promise.catch((err) => {
      console.log("ERROR: ", err.response);
      alert(err.response.data.message);
    });
  }

  return (
    <SingInContainer>
      <form onSubmit={signIn}>
        <input
          placeholder="E-mail"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Password"
          type="password"
          autoComplete="new-password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign-in</button>
      </form>

      <Link to={"/signup"}>First time here? Sign-up!</Link>
    </SingInContainer>
  );
}

const SingInContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
