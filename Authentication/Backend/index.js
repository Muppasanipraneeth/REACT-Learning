const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/AuthRoute");
require("dotenv").config();

const app = express();

// CORS options
const corsOptions = {
    origin: 'http://localhost:5173', // Allow your frontend app
    credentials: true, // Allow credentials (cookies, authorization headers, etc.)
};

app.use(cors(corsOptions)); // Use CORS with the specified options
app.use(cookieParser()); // Middleware to parse cookies
app.use(express.json()); // Middleware for parsing application/json

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("Successfully connected to the database");

    // Start the server only after successful connection
    const PORT = 3000;
    app.listen(PORT, () => {
        console.log(`Server is listening on port ${PORT}`);
    });
}).catch((err) => {
    console.error("Database connection error:", err);
});

// Routes
app.use("/", authRoute);

// Handle uncaught exceptions
process.on('unhandledRejection', (err) => {
    console.error('Unhandled Rejection:', err);
    // Optionally, you can close the server or perform other cleanup actions
});
