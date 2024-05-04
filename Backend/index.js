const express = require('express');
const cors = require('cors');
const { createTodo , updateTodo } = require('./input_validation');
const todo = require('./db');
const app = express();

app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173"
}));


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
        completed: createPayload.completed
    })

    res.json({
        msg : "Todo Created"
    })
});

app.get('/todos' , async (req, res) => {
    await todo.find({}).then((data) => {
        res.json(data);
    });
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
        msg:"Todo mark as completed"
    })
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});