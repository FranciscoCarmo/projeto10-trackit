import styled from "styled-components";

export default function WeekDayButton({ index }) {
  const letterArray = ["D", "S", "T", "Q", "Q", "S", "S"];

  return <DayButton>{letterArray[index]}</DayButton>;
}

const DayButton = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 5px;
  border: solid 1px #d4d4d4;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 20px;
  color: #dbdbdb;
  margin-right: 3px;
`;
