const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const routes = require('./src/controllers/routes');
const animes = require('./src/controllers/animes');
const ceps = require('./src/controllers/ceps');
const movies = require('./src/controllers/movies');
const series = require('./src/controllers/series');
const users = require('./src/controllers/users');
const videoNews = require('./src/controllers/video_news');

/**
 * @description Express
 */
app.use(express.json())

/**
 * @description Body Parsers
 */
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

/**
 * @description Routes
 */
app.use('/', routes)
app.use('/animes', animes)
app.use('/ceps', ceps)
app.use('/movies', movies)
app.use('/series', series)
app.use('/users', users)
app.use('/video_news', videoNews)

app.listen(3000, () => console.log("Server Running"));
