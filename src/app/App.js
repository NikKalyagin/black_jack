//App.js
import 'tailwindcss/tailwind.css';

import "./styles.css";
import "./app.css";
import { useState } from "react";
import Player from "./Player.js";
import Dealer from "./Dealer.js";

export default function App() {
  const [login, setLogin] = useState(false);
  const [startes, setStartes] = useState({
    money: 10,
    name: ""
  });

  const handleInputChange = (e) => {
    const input = e.target.value;
    if (!isNaN(input)) {
      setStartes({ ...startes, money: input });
    }
  };

  if (login) {
    return (
      <>
        <button className="buttonNav" onClick={() => setLogin(false)}>
          <span>Выйти </span>
        </button>
        <Player startes={startes} />
      </>
    );
  } else {
    return (
      <>
        <div className="app">
          <img src="src\app\logo.png" alt="background" />
          <h2 className="ui-text-h2">Black_Jack</h2>
          <p className="ui-text-p">
            Это игра в блекджек. Введи стартовое количество монет, свое имя и
            начни игру.
          </p>

          <div className="start-block">
            <input
              className="ui-input-money"
              placeholder="Введи количество монеток"
              value={startes.money}
              onChange={handleInputChange}
            />
            <br></br>
            <br></br>
            <input
              className="ui-input-name"
              placeholder="Введи свое имя"
              value={startes.name}
              onChange={(e) => setStartes({ ...startes, name: e.target.value })}
            />
          </div>
          <br></br>
          <button className="buttonNav" onClick={() => setLogin(true)}>
            <span>Играть </span>
          </button>
        </div>
      </>
    );
  }
}