import styled from "styled-components";
import WeekDayButton from "./WeekDayButton";
import bin from "../assets/bin.png";
import axios from "axios";
import UserContext from "../contexts/UserContext";
import { useContext } from "react";

export default function OneHabbitFromList({
  name,
  id,
  days,
  reload,
  setReload,
  habbitList,
}) {
  const weekDays = [0, 1, 2, 3, 4, 5, 6];
  const { user, setUser } = useContext(UserContext);
  const { percentage, setPercentage } = useContext(UserContext);

  function tryDelete() {
    let confirmed = false;
    confirmed = window.confirm("Deseja apagar esse hábito?");
    if (confirmed) {
      const token = user.token;
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };

      const promisse = axios.delete(
        `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`,
        config
      );

      promisse.then(console.log("Apagou")).catch(console.log(promisse));
      const x = reload;
      x.push(1);
      setReload([...x]);

      if (habbitList.length == 0) {
        setPercentage(0);
      }
    }
  }

  return (
    <OneHabbitWrapper>
      <HabbitTitle>{name}</HabbitTitle>
      <SelectDays>
        {weekDays.map((index) => {
          return (
            <WeekDayButton index={index} key={index} selectedDaysArray={days} />
          );
        })}
      </SelectDays>
      <img src={bin} onClick={() => tryDelete()}></img>
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

  margin-bottom: 5px;

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
