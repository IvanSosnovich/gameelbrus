import React from "react";
import "./MainPage.css";
// import { Link, useParams } from "react-router-dom";

export default function MainPage() {

  return (
    <div className="main">
      <div className="game">
        <div className="theme">
          <div className="nameTheme">Тема игры 1</div>
          <a className="quest" href="#">
            <div>Вопрос 1</div>
          </a>
          <a className="quest" href="#">
            <div>Вопрос 2</div>
          </a>
          <a className="quest" href="#">
            <div>Вопрос 3</div>
          </a>
        </div>
        <div className="theme">
          <div className="nameTheme">Тема игры 2</div>
          <a className="quest" href="#">
            <div>Вопрос 1</div>
          </a>
          <a className="quest" href="#">
            <div>Вопрос 2</div>
          </a>
          <a className="quest" href="#">
            <div>Вопрос 3</div>
          </a>
        </div>
      </div>
    </div>
  );
}
