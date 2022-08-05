import styled from "styled-components";

import WeekDayButton from "./WeekDayButton";

export default function AddHabbitSection() {
  const weekDays = [0, 1, 2, 3, 4, 5, 6];

  return (
    <AddHabbitWrapper>
      <input placeholder="nome do hábito"></input>
      <SelectDays>
        {weekDays.map((index) => {
          return <WeekDayButton index={index} key={index} />;
        })}
      </SelectDays>

      <BottomButtons>
        <Cancel>Cancelar</Cancel>
        <Save>Salvar</Save>
      </BottomButtons>
    </AddHabbitWrapper>
  );
}

const AddHabbitWrapper = styled.div`
  width: 340px;
  height: 180px;
  border-radius: 5px;

  background-color: white;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 20px;

  input {
    width: 303px;
    height: 45px;
    padding-left: 10px;
    border-radius: 5px;
    border: solid 1px #d4d4d4;

    font-size: 20px;

    ::placeholder {
      color: #dbdbdb;
    }
  }
`;

const SelectDays = styled.div`
  display: flex;
  align-self: flex-start;

  margin-top: 8px;
`;

const BottomButtons = styled.div`
  display: flex;
  align-self: flex-end;

  margin-top: 30px;
`;

const Cancel = styled.div`
  width: 84px;
  height: 35px;
  border-radius: 5px;
  font-size: 16px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #52b6ff;
  cursor: pointer;
`;

const Save = styled.div`
  width: 84px;
  height: 35px;
  border-radius: 5px;
  font-size: 16px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #52b6ff;
  color: white;
  cursor: pointer;
`;
