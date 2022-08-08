import styled from "styled-components";

export default function HistoryContent() {
  return (
    <HistoryContentWrapper>
      <h1>Histórico</h1>
      <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
    </HistoryContentWrapper>
  );
}

const HistoryContentWrapper = styled.div`
  min-width: 100vw;
  min-height: 100vh;

  background-color: #f2f2f2;

  padding-top: 90px;
  padding-bottom: 80px;
  padding-left: 15px;
  padding-right: 15px;
  position: absolute;
  left: 0;

  display: flex;
  flex-direction: column;

  h1 {
    color: #126ba5;
    font-size: 23px;

    margin-bottom: 20px;
  }
  p {
    font-size: 18px;
    color: #666666;
  }
`;
