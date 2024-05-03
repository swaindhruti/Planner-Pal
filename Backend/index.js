const express = require('express');
const { createTodo , updateTodo } = require('./input_validation');
const todo = require('./db');
const app = express();

app.use(express.json());

app.post('/todo', async (req, res) => {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        return res.status(411).json({
            msg : 'Invalid Input',
        });
    }

    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false,
    })

    res.json({
        msg : "Todo Created"
    })
});

app.get('/todos' , (req, res) => {
});

app.put('/completed' , async (req, res) => {
    const createPayload = req.body;
    const parsedPayload = updateTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        return res.status(411).json({
            msg : 'Invalid Input',
        });
    }

    await todo.updateOne({
        _id : req.body.id
    } , {
        completed : true
    });

    res.json({
        msg : "Todo Updated"
    })
});