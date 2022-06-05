class Trailer {
  static split = (link) => {
    const split = link.split("https://youtu.be/");

    if (split[0]) throw createError.UnprocessableEntity("Invalid trailer link");

    const trailer = `https://www.youtube.com/embed/${split[1]}`;

    return trailer;
  }
}

module.exports = Trailer;
