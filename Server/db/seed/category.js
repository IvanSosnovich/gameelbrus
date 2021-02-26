require('dotenv').config();

const mongoose = require('mongoose');

const Category = require('../models/Category');
const User = require('../models/User');
const Question = require('../models/Question');
const Result = require('../models/Result');

async function main() {
  await mongoose.connect(`mongodb+srv://${process.env.DB_USER_NAME}:${process.env.DB_PASSWORD}@${process.env.DB_CONNECTION_ADRESS}/elbrusgame?${process.env.DB_CONNECTION_OPTIONS}`);

  const category = [
    {
      title: 'Страны и столицы'
    },
    {
      title: 'Разное'
    },
    {
      title: 'Шахматы'
    }
  ];




  const user = { name: 'Sara', email: 'sara@gmail.com', password: '123' };
  await User.insertMany(user);

  await Category.insertMany(category);

  mongoose.connection.close();
}

main();
