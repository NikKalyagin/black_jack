//Rules.js

import React from "react";
import "./styles.css";
const Rules = () => {
  return (
    <div className="unitdiv">
      <h1 className="shadowh1">Правила игры:</h1>
      <p className="h1text">
        Значения очков каждой карты: от двойки до десятки — от 2 до 10
        соответственно, у туза — 1 или 11 (11 пока общая сумма не больше 21,
        далее 1), у т. н. картинок (король, дама, валет) — 10.
      </p>
      <h2> Варианты действий</h2>
      <p className="h2text">
        У вас есть набор <span className="throught">стульев</span> кнопок:
      </p>
      <button>start</button> <p>Начинает игру</p>
    </div>
  );
};

export default Rules;