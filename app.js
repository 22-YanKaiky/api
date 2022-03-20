const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const route = require("./src/routes");
const port = process.env.PORT;

app.use(express.json());

require("dotenv").config();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/", route);

app.listen(port, () => console.log(`Server is running on port ${port}`));
