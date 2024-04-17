import Die from "./components/Die";
import "./App.css";
import { useState } from "react";

function App() {
  const [dice, setDice] = useState(allNewDice());

  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(Math.ceil(Math.random() * 6));
    }
    return newDice;
  }

  const dices = dice.map((die) => <Die value={die} />);

  return (
    <main>
      <div className="dice__container">{dices}</div>
      <button onClick={() => setDice(allNewDice())}>Roll Dice</button>
    </main>
  );
}

export default App;
