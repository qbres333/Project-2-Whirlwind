// entry point for packages

const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const routes = require("./controllers");
const helpers = require("./utils/helpers");

// require sequelize
const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

// require handlebars
const hbs = exphbs.create({ helpers });

// cookie
const sess = {
  secret: "Super secret secret ",
  cookie: {
    maxAge: 36000000,
    httpOnly: true,
    secure: false,
    sameSite: "strict",
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

// Manually set Content Security Policy (CSP) headers
app.use((req, res, next) => {
  res.set({
    "Content-Security-Policy":
      "default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self';",
  });
  next();
});
// app.use((req, res, next) => {
//   res.set({
//     "Content-Security-Policy":
//       "default-src 'self'; script-src 'self' cdnjs.cloudflare.com; style-src 'self' cdnjs.cloudflare.com; img-src 'self' data:;",
//   });
//   next();
// });

// to inform which templates from handle bars
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// find path to route
app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`App listening ${PORT}`));
});
