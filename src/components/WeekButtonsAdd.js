import styled from "styled-components";

export default function WeekbuttonsAdd({
  index,
  selectedDaysArray,
  setSelectedDaysArray,
}) {
  const letterArray = ["D", "S", "T", "Q", "Q", "S", "S"];

  if (selectedDaysArray && selectedDaysArray.includes(index)) {
    return (
      <DayButton
        selected
        onClick={() => {
          console.log("Clicou");
          if (selectedDaysArray && selectedDaysArray.includes(index)) {
            setSelectedDaysArray(selectedDaysArray.filter((x) => x != index));
          } else {
            selectedDaysArray.push(index);
            setSelectedDaysArray([...selectedDaysArray]);
          }
        }}
      >
        {letterArray[index]}
      </DayButton>
    );
  } else {
    return (
      <DayButton
        onClick={() => {
          console.log("Clicou");
          if (selectedDaysArray && selectedDaysArray.includes(index)) {
            setSelectedDaysArray(selectedDaysArray.filter((x) => x != index));
          } else {
            selectedDaysArray.push(index);
            setSelectedDaysArray([...selectedDaysArray]);
          }
        }}
      >
        {letterArray[index]}
      </DayButton>
    );
  }
}

const DayButton = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 5px;
  border: solid 1px #d4d4d4;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 20px;
  background-color: ${(props) => (props.selected ? "#CFCFCF" : "white")};
  color: ${(props) => (props.selected ? "white" : "#dbdbdb")};
  margin-right: 3px;
`;
