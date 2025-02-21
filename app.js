require("dotenv").config();

const express = require("express");
const cookieParser = require("cookie-parser");
const methodOverride = require("method-override");
const session = require("express-session");
const MongoStore = require("connect-mongo");

const connectDB = require("./server/config/db");

const app = express();

const PORT = 5000 || process.env.PORT;
const expressLayouts = require("express-ejs-layouts");

app.use(expressLayouts);

app.set("layout", "./layouts/main");
app.set("view engine", "ejs");
connectDB();

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(cookieParser());
app.use(methodOverride("_method"));
app.use(
  session({
    secret: "mani",
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl: process.env.MONGODB_URI,
    }),
  })
);
app.use(express.static("public"));

app.use("/", require("./server/routes/main"));
app.use("/", require("./server/routes/admin"));

app.listen(PORT, () => {
  console.log(`listening on port http://localhost:${PORT}`);
});

exports.moodule = app;
