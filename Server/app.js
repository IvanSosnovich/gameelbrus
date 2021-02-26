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

const sessionConfig = {
  secret: 'secret',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false,
    maxAge: 1000 * 60 * 60,
    httpOnly: false,
  },
};

app.use(session(sessionConfig));

app.use((req, res, next) => {
  res.locals.user = req.session?.user;
  next();
});

//====================Ручки игры

// отправляет всю игру
app.get("/api/elbrusgame", async (req, res) => {
  // let elbrusgame;
  let categories;
  let questions;
  try {
    categories = await Category.find();
    // questions = await Question.find().sort({ 'category': 1, 'price': 1 }).populate('category').exec();
    questions = await Question.onlyThree();

  } catch (error) {
    console.log('Не удалось загрузить категории.')
  }

  res.json({ categories, questions });

});

app.get("/api/question", async (req,res) => {
  try {
    
  } catch (error) {
    
  }

})
// =====================Register, Login, Logout

app.post("/api/register", async (req, res) => {
  const { name, email, password } = req.body;
  const newUser = { name, email, password };
  await User.create(newUser);
  res.json(newUser);
})

app.get("/api/login", (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email }).lean();
  if (user) {
    if (password === user.password) {
      req.session.user = user;
      res.send(200).json(user);
    }
  }

  res.sendStatus(500);

});


app.get("/api/logout", (req, res) => {
  req.session.destroy();
  res.clearCookie("sid");
  res.redirect("/");
});

//=====================Запуск сервера

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
