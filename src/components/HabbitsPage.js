import Header from "./Header";
import Menu from "./Menu";
import HabbitsContent from "./HabbitsContent";
import styled from "styled-components";

export default function HabbitsPage() {
  return (
    <HabbitsPageWrapper>
      <Header />
      <HabbitsContent />
      <Menu />
    </HabbitsPageWrapper>
  );
}

const HabbitsPageWrapper = styled.div`
  width: 100%;
  height: 100%;
`;
