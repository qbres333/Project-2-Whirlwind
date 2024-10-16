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


// Manually set Content Security Policy (CSP)
app.use((req, res, next) => {
  res.set({
    "Content-Security-Policy":
      "default-src 'self'; script-src 'self' https://project-2-whirlwind.onrender.com/ https://cdn.jsdelivr.net/npm/popper.js@1.14.3/dist/umd/popper.min.js https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/js/bootstrap.min.js https://code.jquery.com/jquery-3.3.1.slim.min.js; style-src 'self' https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css https://project-2-whirlwind.onrender.com/; img-src 'self' https://project-2-whirlwind.onrender.com/ http://www.w3.org/2000/svg;",
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

//set headers for public files
app.get("/js/login.js", (req, res) => {
  res.setHeader("Content-Type", "application/javascript");
  res.sendFile(path.join(__dirname, "public", "/js/login.js"));
});


// find path to route
app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`App listening ${PORT}`));
});
