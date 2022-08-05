import styled from "styled-components";
import WeekDayButton from "./WeekDayButton";
import bin from "../assets/bin.png";

export default function OneHabbitFromList() {
  const weekDays = [0, 1, 2, 3, 4, 5, 6];

  return (
    <OneHabbitWrapper>
      <HabbitTitle>Ler 1 capítulo de livro</HabbitTitle>
      <SelectDays>
        {weekDays.map((index) => {
          return <WeekDayButton index={index} key={index} />;
        })}
      </SelectDays>
      <img src={bin}></img>
    </OneHabbitWrapper>
  );
}

const OneHabbitWrapper = styled.div`
  width: 340px;
  min-height: 91px;
  border-radius: 5px;

  display: flex;
  flex-direction: column;
  padding: 15px 15px;
  background-color: white;
  position: relative;

  img {
    width: 13px;
    height: 15px;
    position: absolute;
    right: 10px;
    top: 10px;

    cursor: pointer;
  }
`;

const HabbitTitle = styled.h3`
  font-size: 20px;
  color: #666666;
`;

const SelectDays = styled.div`
  display: flex;
  align-self: flex-start;

  margin-top: 8px;
  margin-bottom: 3px;
`;
