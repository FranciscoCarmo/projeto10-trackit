import styled from "styled-components";

export default function Menu() {
  return (
    <MenuWrapper>
      <div>Hábitos</div>
      <div>Histórico</div>
    </MenuWrapper>
  );
}

const MenuWrapper = styled.div`
  width: 100%;
  height: 70px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  bottom: 0;
  padding-right: 6px;

  div {
    height: 100%;
    width: 142px;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 18px;
    color: #52b6ff;
  }
`;
