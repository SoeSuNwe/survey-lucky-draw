import WheelComponent from "react-wheel-of-prizes";

export default function Spin() {
  const segments = [
    "Better luck ",
    "10% off",
    "5% off",
    "Better luck ",
    "20% off",
    "15% off"
  ];
  const segColors = [
    "black",
    "#60BA97",
    "black",
    "#60BA97",
    "black",
    "#60BA97"
  ];
  const onFinished = (winner) => {
    console.log(winner);
  };
  return (
    <div style={{position:'fixed',width:'500px',height:'400px' }}>
      <WheelComponent
        segments={segments}
        segColors={segColors}
        winningSegment="MM"
        onFinished={(winner) => onFinished(winner)}
        primaryColor="black"
        contrastColor="white"
        buttonText="Start"
        isOnlyOnce={false}
        size={190}
        upDuration={500}
        downDuration={600}
        fontFamily="Helvetica"
      />
    </div>

  );
}