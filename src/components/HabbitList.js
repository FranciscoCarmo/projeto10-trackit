import styled from "styled-components";
import OneHabbitFromList from "./OneHabbitFromList";
import axios from "axios";
import { useState, useEffect } from "react";

export default function HabbitList({ reload, setReload }) {
  const [habbitList, setHabbitList] = useState([]);

  function getHabbit() {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDg3OSwiaWF0IjoxNjU5OTY0Njg4fQ.iVr8POqd35B2p21FIl2-Ezg3xfsnP_mMU8eKufnIbic";

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const promisse = axios.get(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
      config
    );

    promisse
      .then((resposta) => {
        setHabbitList(resposta.data);
      })
      .catch(console.log(promisse));

    console.log(habbitList);
  }

  useEffect(getHabbit, [reload]);
  console.log(habbitList);

  if (habbitList && habbitList.length > 0) {
    return (
      <HabbitListWrapper>
        {habbitList.map((habbit) => {
          return (
            <OneHabbitFromList
              name={habbit.name}
              id={habbit.id}
              key={habbit.id}
              days={habbit.days}
              reload={reload}
              setReload={setReload}
            />
          );
        })}
      </HabbitListWrapper>
    );
  } else {
    return (
      <HabbitListWrapper>
        <NoHabbistText>
          Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
          começar a trackear!
        </NoHabbistText>
      </HabbitListWrapper>
    );
  }
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
  overflow-y: scroll;
`;
