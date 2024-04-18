import Die from "./components/Die";
import { nanoid } from "nanoid";
import "./App.css";
import { useState } from "react";

function App() {
  const [dice, setDice] = useState(allNewDice());

  function generateNewDice() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    };
  }

  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(generateNewDice());
    }
    return newDice;
  }

  function rollDice() {
    setDice((oldDice) =>
      oldDice.map((dice) => {
        return dice.isHeld ? dice : generateNewDice();
      })
    );
  }

  function holdDice(id) {
    setDice((oldDice) =>
      oldDice.map((dice) => {
        return dice.id === id ? { ...dice, isHeld: !dice.isHeld } : dice;
      })
    );
  }
  const dices = dice.map((die) => (
    <Die
      value={die.value}
      key={die.id}
      isHeld={die.isHeld}
      holdDice={() => holdDice(die.id)}
    />
  ));

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
