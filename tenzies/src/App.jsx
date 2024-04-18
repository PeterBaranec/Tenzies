import Die from "./components/Die";
import "./App.css";
import { useState } from "react";

function App() {
  const [dice, setDice] = useState(allNewDice());

  function rollDice() {
    setDice(allNewDice());
  }

  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push({ value: Math.ceil(Math.random() * 6), isHeld: false });
    }
    return newDice;
  }

  const dices = dice.map((die) => <Die value={die.value} />);

  return (
    <main>
      <div className="dice__container">{dices}</div>
      <button onClick={rollDice} className="dice__btn">
        Roll
      </button>
    </main>
  );
}

export default App;
