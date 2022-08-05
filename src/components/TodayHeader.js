import styled from "styled-components";
import dayjs from "dayjs";

export default function TodayHeader() {
  const now = dayjs();
  const diaDoMes = now.date();
  const mes = now.month();

  console.log(now);
  console.log(diaDaSemana(now));

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
