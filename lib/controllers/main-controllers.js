function getHello(ctx) {
  ctx.body = "Hello World!";
}

function getHelloMars(ctx) {
  ctx.body = {
    text: "Hello Mars!",
  };
}

function getJoke(ctx) {
  const randomJoke = oneLinerJoke.getRandomJoke({
    exclude_tags: ["dirty", "racist", "marriage"],
  });

  ctx.body = {
    joke: randomJoke.body,
    powerdBy: "one-liner-joke",
  };
}

function getHelloCustom(ctx) {
  const query = ctx.request.query;

  ctx.body = {
    text: `Hello from ${query.city},`,
  };
}

function getHelloEesti(ctx) {
  const query = ctx.request.query;

  ctx.body = {
    text: "Tere Eesti!",
  };
}

function getSomething(ctx) {
  const query = ctx.request.query;

  ctx.body = {
    text: `no you ${query.word}`,
  };
}

function getAddition(ctx) {
  const query = ctx.request.query;

  ctx.body = {
    text: Number(query.number1) + Number(query.number2),
  };
}

module.exports = {
  getHello,
  getHelloMars,
  getJoke,
  getHelloCustom,
  getHelloEesti,
  getSomething,
  getAddition,
};
