import styled from "styled-components";
import OneTodayHabbit from "./OneTodayHabbit";
import TodayHeader from "./TodayHeader";

export default function TodayContent() {
  return (
    <TodayWrapper>
      <TodayHeader />
      <AllTodayHabbits>
        <OneTodayHabbit />
        <OneTodayHabbit />
        <OneTodayHabbit />
        <OneTodayHabbit />
        <OneTodayHabbit />
        <OneTodayHabbit />
      </AllTodayHabbits>
    </TodayWrapper>
  );
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
