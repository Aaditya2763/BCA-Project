const express = require("express");
const mongoose = require("mongoose");
const app = express();
const path = require("path");
const ejsMate = require("ejs-mate");
const seedDB = require("./feed");
const session=require('express-session');
const passport =require('passport');
const LocalStrategy = require("passport-local");
const MongoStore = require("connect-mongo");
const flash=require('connect-flash')
const User=require("./model/user")
const methodOverride = require("method-override");
app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

mongoose
  .connect("mongodb://localhost:27017/edupoint")
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log(err));



  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(methodOverride("_method"));
const secret = process.env.SECRET || "weneedabettersecret";

const store = MongoStore.create({
  secret: secret,
  mongoUrl: "mongodb://localhost:27017/edupoint",
  touchAfter: 24 * 3600,
});

const sessionConfig = {
  store,
  secret,
  resave: false,
  saveUninitialized: true,
  cookie: {
    // secure: true,
    httpOnly: true,
    expires: Date.now() + 1000 * 60 * 60 * 24 * 7 * 1,
    maxAge: 1000 * 60 * 60 * 24 * 7 * 1,
  },
};

app.use(session(sessionConfig));
app.use(flash());

// Initialising passport in app
app.use(passport.initialize());
app.use(passport.session());

// setting up local strategy 
passport.use(new LocalStrategy(User.authenticate()));

// add the user into the session
passport.serializeUser(User.serializeUser());
// removes the use from the session
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.currentUser = req.user;

  next();
});





const courseRoutes = require("./routes/courseRoutes");
const authRoutes = require("./routes/authRoutes");
const cartRoutes = require("./routes/userCartRoutes");
const userRoutes = require("./routes/userRoutes");
const quizRoutes = require("./routes/quizRoutes");
const adminRoutes = require("./routes/adminRoutes");
app.use(courseRoutes);
app.use(authRoutes);
app.use(cartRoutes);
app.use(quizRoutes);
app.use(userRoutes);
app.use(adminRoutes);

seedDB();

app.get("/", (req, res) => {
  res.render("home");
});
app.use("*", (req, res) => {
  res.status(404).render("404");
});

app.listen("3000", (req, res) => {
  console.log("server started at port 3000");
});
