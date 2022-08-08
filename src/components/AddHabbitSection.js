import styled from "styled-components";
import { useState } from "react";
import axios from "axios";

import WeekButtonsAdd from "./WeekButtonsAdd";

export default function AddHabbitSection({
  isCreatingHabbit,
  setIsCreatingHabbit,
  reload,
  setReload,
}) {
  const weekDays = [0, 1, 2, 3, 4, 5, 6];

  const [selectedDaysArray, setSelectedDaysArray] = useState([]);
  const [habbitName, setHabbitName] = useState("");
  const [disableButtons, SetDisableButtons] = useState(false);

  function handleSave() {
    if (habbitName.length > 0 && selectedDaysArray.length > 0) {
      const body = {
        name: habbitName,
        days: selectedDaysArray,
      };

      SetDisableButtons(true);

      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDg3OSwiaWF0IjoxNjU5OTY0Njg4fQ.iVr8POqd35B2p21FIl2-Ezg3xfsnP_mMU8eKufnIbic";

      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };

      const promisse = axios.post(
        "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
        body,
        config
      );

      promisse
        .then(() => {
          const x = reload;
          x.push(1);
          setReload([...x]);

          SetDisableButtons(false);
          setHabbitName("");
          setSelectedDaysArray([]);
        })
        .catch(alert("Falha ao enviar a requisição"));

      setIsCreatingHabbit(false);
    } else {
      alert("Preencha corretamente os campos");
    }
  }

  if (isCreatingHabbit) {
    if (disableButtons) {
      return (
        <AddHabbitWrapper>
          <input
            placeholder="nome do hábito"
            value={habbitName}
            onChange={(e) => setHabbitName(e.target.value)}
            disabled
          ></input>
          <SelectDays>
            {weekDays.map((index) => {
              return (
                <WeekButtonsAdd
                  index={index}
                  key={index}
                  selectedDaysArray={selectedDaysArray}
                  setSelectedDaysArray={setSelectedDaysArray}
                  disableButtons={disableButtons}
                />
              );
            })}
          </SelectDays>

          <BottomButtons>
            <Cancel
              disabled
              onClick={() => {
                setIsCreatingHabbit(false);
              }}
            >
              Cancelar
            </Cancel>
            <Save disabled onClick={handleSave}>
              Salvar
            </Save>
          </BottomButtons>
        </AddHabbitWrapper>
      );
    } else {
      return (
        <AddHabbitWrapper>
          <input
            placeholder="nome do hábito"
            value={habbitName}
            onChange={(e) => setHabbitName(e.target.value)}
          ></input>
          <SelectDays>
            {weekDays.map((index) => {
              return (
                <WeekButtonsAdd
                  index={index}
                  key={index}
                  selectedDaysArray={selectedDaysArray}
                  setSelectedDaysArray={setSelectedDaysArray}
                />
              );
            })}
          </SelectDays>

          <BottomButtons>
            <Cancel
              onClick={() => {
                setIsCreatingHabbit(false);
              }}
            >
              Cancelar
            </Cancel>
            <Save onClick={handleSave}>Salvar</Save>
          </BottomButtons>
        </AddHabbitWrapper>
      );
    }
  } else return <></>;
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
