import styled from "styled-components";
import check from "../assets/check.png";

export default function OneTodayHabbit() {
  return (
    <OneHabbitWrapper>
      <OneHabbitText>
        <HabbitTitle>Ler um capítulo de livro</HabbitTitle>
        <Sequence>Sequência atual: 5 dias</Sequence>
        <Record>Recorder atual: 6 dias</Record>
      </OneHabbitText>
      <CheckHabbitButton>
        <img src={check}></img>
      </CheckHabbitButton>
    </OneHabbitWrapper>
  );
}

const OneHabbitWrapper = styled.div`
  width: 340px;
  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: white;

  padding: 10px 15px;
`;

const OneHabbitText = styled.div`
  display: flex;
  flex-direction: column;

  color: #666666;
`;

const HabbitTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 6px;
`;

const Sequence = styled.p`
  font-size: 13px;
`;

const Record = styled.p`
  font-size: 13px;
`;

const CheckHabbitButton = styled.div`
  width: 69px;
  height: 69px;
  border-radius: 5px;

  margin-left: 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #ebebeb;
`;
