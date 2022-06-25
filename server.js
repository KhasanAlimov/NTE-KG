require("dotenv").config();
const express = require("express"),
  app = express(),
  mongoose = require("mongoose"),
  expressHbs = require("express-handlebars"),
  hbs = require("hbs"),
  pageRoutes = require("./routes/pages.js"),
  authRoutes = require("./routes/auth.js"),
  contentControl = require("./routes/contentControl"),
  AuthModel = require("./models/auth"),
  session = require("express-session"),
  passport = require("passport"),
  ObjectID = require("mongodb").ObjectID,
  moment = require("moment"),
  LocalStrategy = require("passport-local").Strategy,
  bcrypt = require("bcrypt");

// Настройки HandleBars
app.engine(
  "hbs",
  expressHbs({
    layoutsDir: "views/layouts",
    defaultLayout: "layout",
    extname: "hbs",
    helpers: {
      checkString: (item, res) => {
        return item === ""? res: `uploads/${item}`;
      },
      nowYear: () => {
        return moment().format("YYYY");
      }
    }
  })
);

app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

app.use(
  express.static(__dirname + "/dist"),
  express.urlencoded({ extended: false }),
  express.json(),
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  }),
  passport.initialize(),
  passport.session()
);

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser((id, done) => {
  AuthModel.findOne({ _id: new ObjectID(id) }, (err, doc) => {
    done(null, doc);
  });
});

passport.use(
  new LocalStrategy(function (username, password, done) {
    AuthModel.findOne({ username: username }, function (err, user) {
      if (err) { return done(err); }
      if (user == null) {
        return done(null, false, { message: "No user with that login" });
      }
      try {
        if (bcrypt.compareSync(password, user.password)) {
          return done(null, user);
        } else {
          return done(null, false, { message: "password Incorrect" });
        }
      } catch (e) {
        return done(e);
      }
    });
  })
);

contentControl(app);
authRoutes(app, AuthModel);
pageRoutes(app);

const start = async () => {
  try {
    await mongoose.connect(process.env.AUTH_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useFindAndModify: false,
    });

    app.listen(process.env.PORT, () => {
      console.log(`Сервер запущен в порту ${process.env.PORT}!`);
    });
  } catch (e) {
    console.log(e);
    console.warn("Что то с сервером. Взгляни!");
  }
};

start();
