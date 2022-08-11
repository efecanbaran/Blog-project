const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const morgan = require("morgan");
const router = require("./router/blogRouter");

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(morgan("tiny"))
app.use(express.static("public"))

// Setting of view engine 
app.set("view engine", "ejs")

const PORT = process.env.PORT || 3000;
mongoose.connect(process.env.BLOG_URL)
.then(() => app.listen(PORT, () => console.log("Bağlantı başarılı.")))
.catch(err => console.log(err))

app.use("/", router);