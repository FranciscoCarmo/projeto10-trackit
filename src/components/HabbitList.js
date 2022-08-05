import styled from "styled-components";
import OneHabbitFromList from "./OneHabbitFromList";

export default function HabbitList() {
  return (
    <HabbitListWrapper>
      <OneHabbitFromList />
      <NoHabbistText>
        Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
        começar a trackear!
      </NoHabbistText>
    </HabbitListWrapper>
  );
}

const NoHabbistText = styled.p`
  text-align: left;
  font-size: 18px;
  color: #666666;

  margin-top: 15px;
`;

const HabbitListWrapper = styled.div`
  margin-top: 10px;

  display: flex;
  flex-direction: column;
`;
