import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import axios from "axios";

export default function SignUpPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [telephone, setTelephone] = useState("");
  const [city, setCity] = useState("");
  const [photo, setPhoto] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPass] = useState("");

  const navigate = useNavigate();

  function signUp(e) {
    e.preventDefault();

    const newUser = {
      name,
      email,
      cpf,
      telephone,
      city,
      photo,
      password,
      confirmPassword,
    };

    const promise = axios.post(
      `${import.meta.env.VITE_API_URL}/signup`,
      newUser
    );

    if (password === confirmPassword) {
      promise.then((res) => {
        console.log(res.data);
        navigate("/");
      });
      promise.catch((err) => {
        console.log(err.response.data.message);
        alert(err.response.data);
      });
    } else {
      alert("Password confirmation failed!");
    }
  }

  return (
    <SingUpContainer>
      <form onSubmit={signUp}>
        <input
          placeholder="Name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="E-mail"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="CPF"
          type="text"
          required
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
        />
        <input
          placeholder="Telephone"
          type="text"
          required
          value={telephone}
          onChange={(e) => setTelephone(e.target.value)}
        />
        <input
          placeholder="City"
          type="text"
          required
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <input
          placeholder="Photo"
          type="text"
          required
          value={photo}
          onChange={(e) => setPhoto(e.target.value)}
        />
        <input
          placeholder="Password"
          type="password"
          autoComplete="new-password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          placeholder="Confirm password"
          type="password"
          autoComplete="new-password"
          required
          value={confirmPassword}
          onChange={(e) => setConfirmPass(e.target.value)}
        />
        <button type="submit">Sign-up</button>
      </form>

      <Link to={"/"}>Do you have a account ? Sign-in now!</Link>
    </SingUpContainer>
  );
}

const SingUpContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
