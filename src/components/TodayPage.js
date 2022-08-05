import Header from "./Header";
import Menu from "./Menu";
import TodayContent from "./TodayContent";
import styled from "styled-components";

export default function TodayPage() {
  return (
    <TodayPageWrapper>
      <Header />
      <TodayContent />
      <Menu />
    </TodayPageWrapper>
  );
}

const TodayPageWrapper = styled.div`
  width: 100%;
  height: 100%;
`;
