import styled from "styled-components";
import check from "../assets/check.png";
import axios from "axios";
import UserContext from "../contexts/UserContext";
import { useContext } from "react";

export default function OneTodayHabbit({
  habito,
  reloadToday,
  setReloadToday,
}) {
  const { id, name, done, currentSequence, highestSequence } = habito;
  const { user, setUser } = useContext(UserContext);

  let isRecord = currentSequence == highestSequence;

  function checkHabbit() {
    const token = user.token;
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const body = {};

    let action = "uncheck";
    if (done) {
      action = "uncheck";
    } else {
      action = "check";
    }

    const promisse = axios.post(
      `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/${action}`,
      body,
      config
    );

    promisse
      .then(() => {
        console.log("deu certo");
        const x = reloadToday;
        x.push(1);
        setReloadToday([...x]);
      })
      .catch(console.log("Erro"));
  }

  return (
    <OneHabbitWrapper>
      <OneHabbitText>
        <HabbitTitle>{name}</HabbitTitle>
        <Sequence>
          Sequência atual:{" "}
          <GreenRecord isRecord={isRecord}>
            {" "}
            {currentSequence} dias{" "}
          </GreenRecord>
        </Sequence>
        <Record>
          Seu recorde:{" "}
          <GreenRecord isRecord={isRecord}>
            {" "}
            {highestSequence} dias{" "}
          </GreenRecord>
        </Record>
      </OneHabbitText>
      <CheckHabbitButton done={done} onClick={() => checkHabbit()}>
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

  padding: 10px 12px;
  margin-bottom: 10px;
`;

const OneHabbitText = styled.div`
  display: flex;
  flex-direction: column;

  color: #666666;
`;

const HabbitTitle = styled.h3`
  font-size: 19px;
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

  margin-left: 6px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => (props.done ? "#8FC549" : "#ebebeb")};
`;

const GreenRecord = styled.span`
  color: ${(props) => (props.isRecord ? "#8FC549" : "#666666")};
`;
