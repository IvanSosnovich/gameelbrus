import React from 'react';
import './MainPage.css';
import { Link } from 'react-router-dom';

export default function MainPage() {
  return (
    <div className="main">
      <div className="game">
        <div className="theme">
          <div className="nameTheme">Тема игры 1</div>
          <Link className="quest" to="/">
            <div>Вопрос 1</div>
          </Link>
          <Link className="quest" to="/">
            <div>Вопрос 2</div>
          </Link>
          <Link className="quest" to="/">
            <div>Вопрос 3</div>
          </Link>
        </div>
        <div className="theme">
          <div className="nameTheme">Тема игры 2</div>
          <Link className="quest" to="/">
            <div>Вопрос 1</div>
          </Link>
          <Link className="quest" to="/">
            <div>Вопрос 2</div>
          </Link>
          <Link className="quest" to="/">
            <div>Вопрос 3</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
