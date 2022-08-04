import styled from "styled-components";

import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <LoginContent>
      <img src={logo}></img>
      <form>
        <input type="email" placeholder="email"></input>
        <input type="password" placeholder="senha"></input>
        <Botao type="submit">Entrar</Botao>
      </form>
      <Link to="/cadastro" style={{ textDecoration: "none" }}>
        <p>Não tem uma conta? Cadastre-se</p>
      </Link>
    </LoginContent>
  );
}

const LoginContent = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;

  img {
    height: 180px;
    width: 180px;

    margin-top: 65px;
    margin-bottom: 50px;
  }

  input {
    width: 303px;
    height: 45px;

    border: solid 1px #d4d4d4;
    border-radius: 5px;
    margin-bottom: 5px;

    font-size: 20px;
    padding-left: 10px;
    display: block;

    ::placeholder {
      color: #d4d4d4;
      font-size: 20px;
    }
  }
  form {
    display: flex;
    flex-direction: column;

    align-items: center;
  }

  p {
    margin-top: 22px;

    font-size: 14px;
    color: #52b6ff;
    text-decoration: underline;
  }
`;

const Botao = styled.button`
  width: 303px;
  height: 45px;

  border: none;
  border-radius: 5px;

  background-color: #52b6ff;
  color: white;

  font-size: 21px;

  display: block;
`;
