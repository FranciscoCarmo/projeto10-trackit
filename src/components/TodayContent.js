import styled from "styled-components";
import OneTodayHabbit from "./OneTodayHabbit";
import TodayHeader from "./TodayHeader";
import axios from "axios";
import { useState, useEffect } from "react";
import UserContext from "../contexts/UserContext";
import { useContext } from "react";

export default function TodayContent() {
  const [todayHabbit, setTodayHabbit] = useState();
  const [reloadToday, setReloadToday] = useState([]);

  const { user, setUser } = useContext(UserContext);

  let doneArray = [];

  if (todayHabbit && todayHabbit.length > 0) {
    doneArray = todayHabbit.filter((x) => x.done);
    console.log(doneArray.length == todayHabbit.length);
  }

  function getTodayHabbit() {
    const token = user.token;
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const promisse = axios.get(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",
      config
    );

    promisse
      .then((resposta) => {
        setTodayHabbit(resposta.data);
        // setReloadToday([...reloadToday]);
      })
      .catch(console.log(promisse));

    console.log(todayHabbit);
  }

  useEffect(getTodayHabbit, [reloadToday]);

  if (todayHabbit && todayHabbit.length > 0) {
    return (
      <TodayWrapper>
        <TodayHeader todayHabbit={todayHabbit} />

        <AllTodayHabbits>
          {todayHabbit.map((habito) => {
            return (
              <OneTodayHabbit
                habito={habito}
                key={habito.id}
                reloadToday={reloadToday}
                setReloadToday={setReloadToday}
              />
            );
          })}
        </AllTodayHabbits>
      </TodayWrapper>
    );
  } else {
    return (
      <TodayWrapper>
        <TodayHeader />

        <AllTodayHabbits></AllTodayHabbits>
      </TodayWrapper>
    );
  }
}

const TodayWrapper = styled.div`
  min-width: 100vw;
  min-height: 100vh;

  background-color: #f2f2f2;

  padding-top: 70px;
  padding-bottom: 80px;
  padding-left: 15px;
  padding-right: 15px;
  position: absolute;
  left: 0;

  display: flex;
  flex-direction: column;
`;

const AllTodayHabbits = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MyHabbitsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  color: #126ba5;
  font-size: 23px;

  margin-top: 20px;
`;

const AddHabbit = styled.div`
  width: 40px;
  height: 35px;
  border-radius: 5px;

  background-color: #52b6ff;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  font-size: 27px;
  line-height: 35px;
  color: white;
`;
