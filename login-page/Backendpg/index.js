const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const userDatabase = require("./data");
const cors = require("cors");
const app = express();

app.use(cors());

// Initialize MongoDB connection
const Database = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/userDatabase", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("MongoDB is connected");
    } catch (err) {
        console.error("Error connecting to MongoDB:", err);
    }
};

Database();

const port = 3000;

app.use(cors());
app.use(bodyParser.json()); // Using body-parser to parse JSON request bodies

app.listen(port, () => {
    console.log("Server is running on port", port);
});

app.get("/", (req, res) => {
    res.send("This is working");
});

app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    console.log(email, password);
    
    // Authentication logic should be added here
    res.send("This is the login page");
});

app.post("/signup", async (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    // Simple validation
    if (!firstName || !lastName || !email || !password) {
        return res.status(400).send("All fields are required");
    }

    try {
        const newUser = new userDatabase({ firstName, lastName, email, password });
        await newUser.save();
        res.status(201).send("User registered successfully");
    } catch (error) {
        console.error("Error registering user:", error);
        res.status(400).send("Error registering user");
    }
});

