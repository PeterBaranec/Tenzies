import "../components/Die.css";

export default function Die(props) {
  const styles = {
    backgroundColor: props.isHeld ? "#59E391" : "white",
  };

  return (
    <div className="die__item" style={styles} onClick={props.holdDice}>
      <h2>{props.value}</h2>
    </div>
  );
}
