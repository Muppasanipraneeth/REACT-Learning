const express = require("express");
const mongoose = require("mongoose");
const userDatabase = require("./data"); // Ensure this path is correct
const port = 3000;
const app = express();

app.use(express.json()); // Middleware to parse JSON requests

app.listen(port, () => {
    console.log("Server is running on port", port);
});

const dataBase = async () => {
    await mongoose.connect("mongodb://localhost:27017/userDatabase", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log("MongoDB is connected");
    }).catch(err => {
        console.error("Error connecting to MongoDB:", err);
    });
};

dataBase();

app.get("/", (req, res) => {
    res.send("This is working");
});

app.post("/signup", async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    try {
        const newUser = new userDatabase({ firstName, lastName, email, password });
        await newUser.save();
        res.status(201).send("User registered successfully");
    } catch (error) {
        res.status(400).send("Error registering user");
    }
});
