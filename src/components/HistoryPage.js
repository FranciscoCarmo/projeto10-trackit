import Header from "./Header";
import Menu from "./Menu";
import HistoryContent from "./HistoryContent";
import styled from "styled-components";

export default function HistoryPage() {
  return (
    <HistoryPageWrapper>
      <Header />
      <HistoryContent />
      <Menu />
    </HistoryPageWrapper>
  );
}

const HistoryPageWrapper = styled.div`
  width: 100%;
  height: 100%;
`;
