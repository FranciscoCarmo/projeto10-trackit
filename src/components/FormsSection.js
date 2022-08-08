import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../contexts/UserContext";

export default function FormsSection() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  let navigate = useNavigate();

  const { user, setUser } = useContext(UserContext);

  if (localStorage.getItem("nome")) {
    setUser({
      name: localStorage.getItem("nome"),
      id: localStorage.getItem("id"),
      image: localStorage.getItem("image"),
      email: localStorage.getItem("email"),
      password: localStorage.getItem("password"),
      token: localStorage.getItem("token"),
    });

    navigate("/hoje", { replace: true });
  }

  function handleLoginForm(e) {
    e.preventDefault();

    const loginData = {
      email: email,
      password: password,
    };
    console.log(loginData);

    const requisicao = axios.post(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login",
      loginData
    );

    setIsLoading(true);

    requisicao
      .then((resposta) => {
        console.log("Deu certo");
        console.log(resposta.data);
        setUser({ ...resposta.data });

        //local storage
        localStorage.setItem("nome", resposta.data.name);
        localStorage.setItem("id", resposta.data.id);
        localStorage.setItem("image", resposta.data.image);
        localStorage.setItem("email", resposta.data.email);
        localStorage.setItem("password", resposta.data.password);
        localStorage.setItem("token", resposta.data.token);

        navigate("/hoje", { replace: true });

        setEmail("");
        setPassword("");
        setIsLoading(false);
      })
      .catch(() => {
        alert("Falha no login");

        console.log(requisicao);
        setEmail("");
        setPassword("");
        setIsLoading(false);
      });
  }

  if (isLoading) {
    return (
      <form onSubmit={handleLoginForm}>
        <input type="email" placeholder="email" disabled value={email}></input>
        <input
          type="password"
          placeholder="senha"
          disabled
          value={password}
        ></input>
        <Botao type="submit" disabled fosco="true">
          <ThreeDots color="#FFF" height={50} width={50} />
        </Botao>
      </form>
    );
  } else {
    return (
      <form onSubmit={handleLoginForm}>
        <input
          type="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        ></input>
        <input
          type="password"
          placeholder="senha"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        ></input>
        <Botao type="submit">Entrar</Botao>
      </form>
    );
  }
}

const Botao = styled.button`
  width: 303px;
  height: 45px;

  border: none;
  border-radius: 5px;

  background-color: #52b6ff;
  opacity: ${(props) => (props.fosco ? 0.3 : 1)};
  color: white;

  font-size: 21px;

  display: flex;
  justify-content: center;
  align-items: center;
`;
