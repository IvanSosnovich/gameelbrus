const { connect, disconnect, Cards, User } = require('./models');

async function main() {
  await connect('mongodb://localhost:27017/',
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
      console.log('Успешно подключились к базе данных.');
    });

  const users = [];
  const cards = [];

  //users.push(new User({ name: 'Ivan', score: 3 }));


  cards.push(new Cards({
    name: 'beatles',
    question: 'Какого музыканта не хватало группе на ранних стадиях развития? (Баяниста, Арфиста, Барабанщика)',
    answer: 'Барабанщика',
  }));

  cards.push(new Cards({
    name: 'beatles',
    question: 'О каком транспорте спели «битлы»? (Оранжевом пароходе, Желтой подлодке, Красном самолёте)',
    answer: 'Желтой подлодке',
  }));

  cards.push(new Cards({
    name: 'beatles',
    question: 'Как по-другому называют группу «Битлз»? (Ливерпульская четверка, Жучары, Нет другого названия)',
    answer: 'Ливерпульская четверка',
  }));

  cards.push(new Cards({
    name: 'friends',
    question: 'Какая была надпись на рюкзаке Роса в детстве? (Геология - рулит!, Динозавры - рулят!, Книги - рулят!)',
    answer: 'Геология - рулит!',
  }));

  cards.push(new Cards({
    name: 'friends',
    question: 'Сколько детей родила Фиби? (трех, одного, двух)',
    answer: 'Троих',
  }));

  cards.push(new Cards({
    name: 'friends',
    question: 'Какие животные жили у Джо и Чендлера? (Крыса и хорек, Енот и дерево, Утка и курица)',
    answer: 'Утка и курица',
  }));

  cards.push(new Cards({
    name: 'words',
    question: 'Из какого языка пришло слово “тротуар”? (Итальянский, Испанский, Французский)',
    answer: 'Французский',
  }));

  cards.push(new Cards({
    name: 'words',
    question: 'Из какого языка пришло слово “гусар”? (Французский, Венгерский, Болгарский)',
    answer: 'Венгерский',
  }));

  cards.push(new Cards({
    name: 'words',
    question: 'Из какого языка пришло слово “чай”? (Корейский, Китайский, Хинди)',
    answer: 'Китайский',
  }));

  await User.insertMany(users);
  await Cards.insertMany(cards);
  await disconnect();
}

main();


const mongoose = require("mongoose");
const TypeFoto = require('../db/models/typeFoto')
mongoose.connect('mongodb://localhost:27017/fotosite', { useNewUrlParser: true, useUnifiedTopology: true });

const typeFoto = [
  {
    typename: "Love story",
    description: "Услуги фотосессии по Вашим желаниям",
    price: 1000,
    images:[{_id:'60250145412e3151a4af52a8'},{_id:'60250145412e3151a4af52a9'},{_id:'60250145412e3151a4af52aa'},{_id:'60250145412e3151a4af52c1'},{_id:'60250145412e3151a4af52c2'},{_id:'60250145412e3151a4af52c3'}]
  },
  {
    typename: "Свадебная фотосъемка",
    description: "Услуги фотосессии по Вашим желаниям с выездом",
    price: 1000,
    images:[{_id:'60250145412e3151a4af52ab'},{_id:'60250145412e3151a4af52ac'},{_id:'60250145412e3151a4af52ad'},{_id:'60250145412e3151a4af52be'},{_id:'60250145412e3151a4af52bf'},{_id:'60250145412e3151a4af52c0'}]
  },
  {
    typename: "Мужские портреты",
    description: "Услуги фотосессии по Вашим желаниям",
    price: 500,
    images:[{_id:'60250145412e3151a4af52ae'},{_id:'60250145412e3151a4af52af'},{_id:'60250145412e3151a4af52b0'},{_id:'60250145412e3151a4af52bc'},{_id:'60250145412e3151a4af52bd'}]
  },
  {
    typename: "Женские портреты",
    description: "Услуги фотосессии по Вашим желаниям",
    price: 500,
    images:[{_id:'60250145412e3151a4af52b1'},{_id:'60250145412e3151a4af52b2'},{_id:'60250145412e3151a4af52b3'},{_id:'60250145412e3151a4af52ba'},{_id:'60250145412e3151a4af52bb'}]
  },
  {
    typename: "Журналы и публикации",
    description: "Представлены фотографии , опубликованные в периодических печатных изданиях и на сайтах СМИ",
    price: 500,
    images:[{_id:'60250145412e3151a4af52b4'},{_id:'60250145412e3151a4af52b5'},{_id:'60250145412e3151a4af52b6'}, {_id:'60250145412e3151a4af52b7'},{_id:'60250145412e3151a4af52b8'},{_id:'60250145412e3151a4af52b9'}]
  },

]
TypeFoto.insertMany(typeFoto).then(() => {
    mongoose.connection.close();
  });
