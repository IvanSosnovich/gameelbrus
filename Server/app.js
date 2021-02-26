require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require("cors");
const User = require('./db/models/User');
const Category = require('./db/models/Category');
const Question = require('./db/models/Question');
const Result = require('./db/models/Result');


// const session = require('express-session');
// const FileStore = require('session-file-store')(session);


const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// const sessionConfig = {
//   secret: 'secret',
//   resave: false,
//   saveUninitialized: false,
//   cookie: {
//     secure: false,
//     maxAge: 1000 * 60 * 60,
//     httpOnly: false,
//   },
// };

// app.use(session(sessionConfig));

// app.use((req, res, next) => {
//   res.locals.user = req.session?.user;
//   next();
// });


// отправляет всю игру
app.get("/api/elbrusgame", async (req, res) => {
  // let elbrusgame;
  let categories;
  let questions;
  try {
    categories = await Category.find();
    questions = await Question.find().sort({'category': 1, 'price': 1}).populate('category').exec();

  } catch (error) {
    console.log('Не удалось загрузить категории.')
  }

  res.json({ categories, questions });

});


app.post("/api/register", (req,res) => {
  const { name, email, password } = req.body;

})

app.get("/api/login", (req,res) => {

})


app.post("/api/todos", (req, res) => {
  const { title, priority } = req.body;
  const id = Date.now();
  const newTodo = { id, title, priority };
  todos.push(newTodo);
  res.json(newTodo);
});


app.listen(process.env.PORT, () => {
  console.log('Сервер запустился');

  mongoose.connect(
    `mongodb+srv://${process.env.DB_USER_NAME}:${process.env.DB_PASSWORD}@${process.env.DB_CONNECTION_ADRESS}/elbrusgame?${process.env.DB_CONNECTION_OPTIONS}`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    },
    () => {
      console.log('Connection to database is successful.');
    }
  );
});

module.exports = app;
