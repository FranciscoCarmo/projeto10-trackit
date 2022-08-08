import styled from "styled-components";
import UserContext from "../contexts/UserContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function Menu() {
  const { percentage, setPercentage } = useContext(UserContext);

  let navigate = useNavigate();

  return (
    <MenuWrapper>
      <div
        onClick={() => {
          navigate("../habitos", { replace: true });
        }}
      >
        Hábitos
      </div>
      <Circle
        onClick={() => {
          navigate("../hoje", { replace: true });
        }}
        style={{ width: 91, height: 91 }}
      >
        <CircularProgressbar
          value={percentage}
          text={`Hoje`}
          background
          backgroundPadding={6}
          styles={buildStyles({
            backgroundColor: "#52B6FF",
            textColor: "#fff",
            pathColor: "#fff",
            trailColor: "transparent",
          })}
        />
      </Circle>
      <div
        onClick={() => {
          navigate("../historico", { replace: true });
        }}
      >
        Histórico
      </div>
    </MenuWrapper>
  );
}

const MenuWrapper = styled.div`
  width: 100%;
  height: 70px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: white;

  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 2;
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

const Circle = styled.div`
  width: 91px;
  height: 91px;

  margin-bottom: 45px;
`;
