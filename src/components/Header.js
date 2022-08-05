import headerLogo from "../assets/headerLogo.png";
import styled from "styled-components";
import UserContext from "../contexts/UserContext";
import { useContext } from "react";

export default function Header() {
  const { user, setUser } = useContext(UserContext);
  return (
    <TopHeader>
      <TopLogo src={headerLogo}></TopLogo>
      <UserPic src={user.image}></UserPic>
    </TopHeader>
  );
}

const TopHeader = styled.div`
  width: 100%;
  height: 70px;

  background-color: #126ba5;
  padding: 0 15px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
`;

const TopLogo = styled.img`
  width: 97px;
`;

const UserPic = styled.img`
  width: 51px;
  height: 51px;
  border-radius: 98.5px;
`;
