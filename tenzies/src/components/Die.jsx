import "../components/Die.css";

export default function Die(props) {
  return (
    <div className="die__item">
      <h2>{props.value}</h2>
    </div>
  );
}
