import './App.css';
import React from 'react';
import LogIn from './LogIn/Login';
import Register from './Register/Register';
import Questions from './Questions/Questions';
import MainPage from './MainPage/MainPage';
import TableResult from './TableResult/TableResult';

function App() {
  return (
    <div div className="App">
      <LogIn />
      <Register />
      <Questions />
      <MainPage />
      <TableResult />
    </div>
  );
}

export default App;
