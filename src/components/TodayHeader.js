import styled from "styled-components";
import dayjs from "dayjs";
import UserContext from "../contexts/UserContext";
import { useContext } from "react";

export default function TodayHeader({ todayHabbit }) {
  const now = dayjs();
  const diaDoMes = now.date();
  const mes = now.month();

  const { percentage, setPercentage } = useContext(UserContext);

  console.log(now);
  console.log(diaDaSemana(now));

  let doneArray = [];
  let aux = 0;

  if (todayHabbit && todayHabbit.length > 0) {
    doneArray = todayHabbit.filter((x) => x.done);
    aux = doneArray.length / todayHabbit.length;
    aux = aux * 100;
    aux = aux.toFixed(0);
    setPercentage(aux);
    console.log(percentage);
  }

  function diaDaSemana(now) {
    const dia = now.day();

    switch (dia) {
      case 0:
        return "Domingo";
        break;

      case 1:
        return "Segunda";
        break;

      case 2:
        return "Terça";
        break;

      case 3:
        return "Quarta";
        break;

      case 4:
        return "Quinta";
        break;

      case 5:
        return "Sexta";
        break;

      case 6:
        return "Sábado";
        break;
    }
  }

  if (percentage > 0) {
    return (
      <TodayHeaderWrapper>
        <h2>
          {diaDaSemana(now)}, {diaDoMes.toString().padStart(2, "0")}/
          {mes.toString().padStart(2, "0")}
        </h2>
        <GreenText>{percentage}% dos hábitos concluídos</GreenText>
      </TodayHeaderWrapper>
    );
  } else {
    return (
      <TodayHeaderWrapper>
        <h2>
          {diaDaSemana(now)}, {diaDoMes.toString().padStart(2, "0")}/
          {mes.toString().padStart(2, "0")}
        </h2>
        <p>Nenhum hábito concluído ainda</p>
      </TodayHeaderWrapper>
    );
  }
}

const TodayHeaderWrapper = styled.div`
  margin-top: 28px;
  margin-bottom: 28px;

  margin-left: 6px;

  h2 {
    font-size: 23px;
    color: #126ba5;
  }
  p {
    font-size: 18px;
    color: #bababa;
  }
`;

const GreenText = styled.div`
  font-size: 18px;
  color: #8fc549;
`;
