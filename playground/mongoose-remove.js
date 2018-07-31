const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove
// Todo.findByIdAndRemove
Todo.findOneAndRemove({_id:'5b60ab82702a2f52bcdba5fb'}).then((todo) => {
  
});

Todo.findByIdAndRemove('5b60ab1e2e0ecd5744998339').then((todo) => {
  console.log(todo);
});
