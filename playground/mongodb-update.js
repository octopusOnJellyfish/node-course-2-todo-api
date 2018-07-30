// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

 // db.collection('Todos').findOneAndUpdate({
 //   _id: new ObjectID('5b5f9db17039314578f46620')
 // }, {
 //   $set: {
 //     completed: true
 //   }
 // },{
 //   returnOriginal: false
 // }).then((result) => {
 //   console.log(result);
 // });
 db.collection('Users').findOneAndUpdate({
   _id: new ObjectID('5b5ccb63d3fc9a16d42fd29b')
 }, {
   $set: {
     name: 'German mesco'
   },
   $inc: {
     age:15
   }
 },{
   returnOriginal: false
 }).then((result) => {
   console.log(result);
 });

  //client.close();
});
