const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:qEWT84dcluqJQSfT@cluster0.2mmswww.mongodb.net/');

if(mongoose.connection){
    console.log("Connected to MongoDB");
}

const todoSchema = new mongoose.Schema({
    title : String,
    description : String,
    completed : Boolean
});

const todo = mongoose.model('todos' , todoSchema);

module.exports = todo;