import styled from "styled-components";

export default function TodayContent() {
  return (
    <HabbitsWrapper>
      <MyHabbitsContainer>
        <h2>Meus hábitos</h2>
        <AddHabbit>+</AddHabbit>
      </MyHabbitsContainer>
      <HabbitList />
    </HabbitsWrapper>
  );
}

const HabbitsWrapper = styled.div`
  min-width: 100vw;
  min-height: 100vh;

  background-color: #f2f2f2;

  padding-top: 70px;
  padding-bottom: 70px;
  padding-left: 15px;
  padding-right: 15px;

  position: fixed;
  top: 0;
  left: 0;
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
