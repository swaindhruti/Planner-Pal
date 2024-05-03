const express = require('express');
const { createTodo , updateTodo } = require('./input_validation');
const app = express();

app.use(express.json());

app.post('/todo', (req, res) => {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        return res.status(411).json({
            msg : 'Invalid Input',
        });
    }
});

app.get('/todos' , (req, res) => {
});

app.put('/completed' , (req, res) => {
});