require('dotenv').config();

const mongoose = require('mongoose');

const Category = require('./models/Category');
const User = require('./models/User');
const Question = require('./models/Question');
const Result = require('./models/Result');


mongoose.connect(`mongodb+srv://${process.env.DB_USER_NAME}:${process.env.DB_PASSWORD}@${process.env.DB_CONNECTION_ADRESS}/elbrusgame?${process.env.DB_CONNECTION_OPTIONS}`);

const category = [
  {
    typename: "Love story",
    description: "Услуги фотосессии по Вашим желаниям",
    price: 1000,
    images: [{ _id: '60250145412e3151a4af52a8' }, { _id: '60250145412e3151a4af52a9' }, { _id: '60250145412e3151a4af52aa' }, { _id: '60250145412e3151a4af52c1' }, { _id: '60250145412e3151a4af52c2' }, { _id: '60250145412e3151a4af52c3' }]
  },
  {
    typename: "Свадебная фотосъемка",
    description: "Услуги фотосессии по Вашим желаниям с выездом",
    price: 1000,
    images: [{ _id: '60250145412e3151a4af52ab' }, { _id: '60250145412e3151a4af52ac' }, { _id: '60250145412e3151a4af52ad' }, { _id: '60250145412e3151a4af52be' }, { _id: '60250145412e3151a4af52bf' }, { _id: '60250145412e3151a4af52c0' }]
  },
  {
    typename: "Мужские портреты",
    description: "Услуги фотосессии по Вашим желаниям",
    price: 500,
    images: [{ _id: '60250145412e3151a4af52ae' }, { _id: '60250145412e3151a4af52af' }, { _id: '60250145412e3151a4af52b0' }, { _id: '60250145412e3151a4af52bc' }, { _id: '60250145412e3151a4af52bd' }]
  },
  {
    typename: "Женские портреты",
    description: "Услуги фотосессии по Вашим желаниям",
    price: 500,
    images: [{ _id: '60250145412e3151a4af52b1' }, { _id: '60250145412e3151a4af52b2' }, { _id: '60250145412e3151a4af52b3' }, { _id: '60250145412e3151a4af52ba' }, { _id: '60250145412e3151a4af52bb' }]
  },
  {
    typename: "Журналы и публикации",
    description: "Представлены фотографии , опубликованные в периодических печатных изданиях и на сайтах СМИ",
    price: 500,
    images: [{ _id: '60250145412e3151a4af52b4' }, { _id: '60250145412e3151a4af52b5' }, { _id: '60250145412e3151a4af52b6' }, { _id: '60250145412e3151a4af52b7' }, { _id: '60250145412e3151a4af52b8' }, { _id: '60250145412e3151a4af52b9' }]
  },

]


Category.insertMany(category).then(() => {
  mongoose.connection.close();
});
