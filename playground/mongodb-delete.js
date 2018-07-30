// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // delete many
  // db.collection('Todos').deleteMany({text: 'Comer cena'}).then((result) => {
  //   console.log(result);
  // });

  // delete one
  // db.collection('Todos').deleteOne({text: 'Comer cena'}).then((result) => {
  //   console.log(result);
  // });
  db.collection('Users').deleteMany({name: 'Rodrigo Nicolas'}).then((result) => {
    console.log(result);
  });
  db.collection('Users').findOneAndDelete({
    _id: new ObjectID('5b5ccd8ae8cd4d3e848ebd6b')
  }).then((result) => {
    console.log(result);
  });
  db.collection('Users').find().toArray().then((docs) => {
    console.log('Users: ');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch todos', err);
  });
  // findOneDelete

  //client.close();
});
