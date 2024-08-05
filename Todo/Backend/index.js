const express = require("express");
const { updateTodo, createTodo } = require("./type");
const mongoose = require("mongoose");
const { todos } = require("./db");
const cors=require("cors");

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());


app.listen(port,()=>{
    console.log(" this is port is working ");
})

async function main() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/todos");
    console.log("MongoDB connection is successful");
  } catch (err) {
    console.error("There was an error connecting to MongoDB:", err);
  }
}

main();

app.post("/todo", async (req, res) => {
  const createPayload = req.body;
  const parsePayload = createTodo.safeParse(createPayload);
  
  if (!parsePayload.success) {
    res.status(411).json({ msg: "You have given the wrong input" });
    return;
  }

  await todos.create({
    title: createPayload.title,
    description: createPayload.description,
    completed:false
  });

  res.json({ msg: "The data is created successfully" });
});

app.get("/todo", async (req, res) => {
  const allTodos = await todos.find();
  res.json(allTodos);
});

app.put("/completed", async (req, res) => {
  const updatePayload = req.body;
  const parsePayload = updateTodo.safeParse(updatePayload);

  if (!parsePayload.success) {
    res.status(411).json({ msg: "Given the wrong info" });
    return;
  }

  const updatedTodo = await todos.findByIdAndUpdate(
    updatePayload.id,
    { completed: updatePayload.completed },
    { new: true }
  );

  if (!updatedTodo) {
    res.status(404).json({ msg: "Todo not found" });
    return;
  }

  res.json({ msg: "Todo updated successfully", todo: updatedTodo });
});
