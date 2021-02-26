require('dotenv').config();

const mongoose = require('mongoose');

const Category = require('../models/Category');
const Question = require('../models/Question');
const Result = require('../models/Result');

async function main() {
  await mongoose.connect(`mongodb+srv://${process.env.DB_USER_NAME}:${process.env.DB_PASSWORD}@${process.env.DB_CONNECTION_ADRESS}/elbrusgame?${process.env.DB_CONNECTION_OPTIONS}`);

  const questions = [
    {
      question: 'Какой город является столицей Швейцарии?',
      category: '6038d960d7575060d4576478',
      answer: 'Берн',
      price: 300,
      isChosen: 'false',
    },
    {
      question: 'Какой город является столицей Алжира?',
      category: '6038d960d7575060d4576478',
      answer: 'Алжир',
      price: 200,
      isChosen: 'false',
    },
    {
      question: 'Какой город является столицей Тайланда?',
      category: '6038d960d7575060d4576478',
      answer: 'Бангкок',
      price: 100,
      isChosen: 'false',

    },
    {
      question: 'Какой город является столицей Зимбабве?',
      category: '6038d960d7575060d4576478',
      answer: 'Хараре',
      price: 300,
      isChosen: 'false',

    },
    {
      question: 'Какой город является столицей Индии?',
      category: '6038d960d7575060d4576478',
      answer: 'Дели',
      price: 200,
      isChosen: 'false',

    },
    {
      question: 'Каков смысл выражения: «Лучшая уха из петуха»?',
      category: '6038d960d7575060d4576479',
      answer: 'Лучшая рыба — это колбаса',
      price: 100,
      isChosen: 'false',

    },
    {
      question: 'Как называли человека, умевшего играть на погремушке из бычьего пузыря с сухим горохом внутри?',
      category: '6038d960d7575060d4576479',
      answer: 'Ударник',
      price: 300,
      isChosen: 'false',

    },
    {
      question: 'Почему в Англии наезд на собаку наказывается строже, чем наезд на человека?',
      category: '6038d960d7575060d4576479',
      answer: 'В Англии собаки служили в Скотланд-Ярде',
      price: 200,
      isChosen: 'false',

    },
    {
      question: 'Сколько пешек одного цвета расположено на шахматной доске в начале партии?',
      category: '6038d960d7575060d457647a',
      answer: 'Восемь',
      price: 100,
      isChosen: 'false',

    },
    {
      question: 'В боксе – нокдаун, а в шахматах – …',
      category: '6038d960d7575060d457647a',
      answer: 'Шах',
      price: 200,
      isChosen: 'false',

    },
    {
      question: 'Как по-другому называют шахматную ладью??',
      category: '6038d960d7575060d457647a',
      answer: 'Тура',
      price: 300,
      isChosen: 'false',

    },
    {
      question: 'Какая шахматная фигура обозначается латинской буквой «P»??',
      category: '6038d960d7575060d457647a',
      answer: 'Пешка',
      price: 200,
      isChosen: 'false',

    },
    {
      question: 'Сколько циферблатов имеют шахматные часы??',
      category: '6038d960d7575060d457647a',
      answer: 'Два',
      price: 100,
      isChosen: 'false',

    },
    {
      question: 'Сколько клеток насчитывается на самой короткой диагонали шахматной доски?',
      category: '6038d960d7575060d457647a',
      answer: 'Две',
      price: 300,
      isChosen: 'false',

    },
    {
      question: 'Как называют партию по быстрым шахматам?',
      category: '6038d960d7575060d457647a',
      answer: 'Две',
      price: 100,
      isChosen: 'false',

    },

  ];





  await Question.insertMany(questions);

  mongoose.connection.close();
}

main();
