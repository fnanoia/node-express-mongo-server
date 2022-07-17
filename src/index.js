const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;
const userRoutes = require("./routes/user");

//Middlewares
app.use(express.json());
app.use(express.text());
app.use("/api", userRoutes);

//Ruta principal
app.get("/", (req, res) => {
    res.status(200).send("Welcome to my API-rest");
});

//Conexion a BD
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log("Connected to MongoDB Atlas"))
.catch((err) => console.error(err));

//Start server
app.listen(PORT, 
    () => console.log(`Running on http://localhost:${PORT}`
));