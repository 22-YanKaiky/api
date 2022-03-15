const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const routes = require('./src/Controllers/routes');
const animes = require('./src/Controllers/animes');
const ceps = require('./src/Controllers/ceps');
const movies = require('./src/Controllers/movies');
const series = require('./src/Controllers/series');
const users = require('./src/Controllers/users');
const videoNews = require('./src/Controllers/video_news');

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
