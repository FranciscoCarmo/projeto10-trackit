import GlobalStyles from "./components/GlobalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";

import LoginPage from "./components/LoginPage";

export default function App() {
  return (
    <>
      <GlobalStyles />
      <Content>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />}></Route>
          </Routes>
        </BrowserRouter>
      </Content>
    </>
  );
}

const Content = styled.div`
  max-width: 375px;
  width: 100vw;

  display: flex;
  flex-direction: column;

  box-sizing: border-box;

  font-family: "Lexend Deca", sans-serif;

  * {
    box-sizing: border-box;
  }
`;
