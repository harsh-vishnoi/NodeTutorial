const express = require('express');
const mongoose = require('mongoose');
const config = require('config');

const app = express();

const db = config.get('mongoURI');

mongoose
.connect(db, {
  useNewUrlParser : true,
  useCreateIndex : true,
  useFindAndModify : false
}).then(() => {
  console.log('MongoDB Connected ... ')
}).catch( err => {
  console.log(err)
});


const Animal = require('./models/animal.js');

// const newAnimal = new Animal({
//   name : "Panda"
// })
//
// newAnimal
// .save()
// .then(item => {
//   console.log(item);
// }).catch(err => {
//   console.log(err);
// })

Animal
.find()
.sort({
  date: -1
}).then(items => {
  console.log(items)
});

Animal
.findOneAndUpdate(
  { _id: '5d14cd34e8dbe65a6417915b' },
  { isEndangered: false }
).then(item => {
  console.log(item)
});

Animal
.findOneAndDelete(
  { _id: '5d14cd34e8dbe65a6417915b' },
  { isEndangered: false }
).then({
  console.log('Item deleted')
});
