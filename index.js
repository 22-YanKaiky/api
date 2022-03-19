const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const route = require("./src/routes");
const animes = require("./src/routes/animes");
const ceps = require("./src/routes/ceps");
const movies = require("./src/routes/movies");
const series = require("./src/routes/series");
const users = require("./src/routes/users");
const news = require("./src/routes/news");
const port = process.env.PORT;

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/", route);
app.use("/animes", animes);
app.use("/ceps", ceps);
app.use("/movies", movies);
app.use("/series", series);
app.use("/users", users);
app.use("/news", news);

app.listen(port, () => console.log(`Server running on port ${port}`));
