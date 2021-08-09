const createError = require("http-errors");
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const logger = require("morgan");
const session = require("express-session");
const redis = require("redis");
const cors = require("cors");
const RedisStore = require("connect-redis")(session);

//Setup mongoose connection
const {
  MONGO_USER,
  MONGO_PORT,
  MONGO_IP,
  MONGO_PASSWORD,
  REDIS_URL,
  REDIS_PORT,
  SESSION_SECRET,
} = require("./config");

// const corsOptions = {
//   origin: "http://localhost:3005",
//   credentials: true,
// };

const redisClient = redis.createClient({
  host: REDIS_URL,
  port: REDIS_PORT,
});

const indexRouter = require("./routes/index");
const catalogRouter = require("./routes/catalog");
const usersRouter = require("./routes/users");

const app = express();

//Set up default mongoose connection
const mongoDB = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/rated-data?authSource=admin`;

const connectWithRetry = () => {
  mongoose
    .connect(mongoDB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    })
    .then(() => console.log("succesfully connnected to DB"))
    .catch((e) => {
      setTimeout(connectWithRetry, 5000);
    });
};

connectWithRetry();

//Get the default connection
const db = mongoose.connection;

db.once("open", function () {
  console.log("connection has been made");
});

//Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use(logger("dev"));
app.set("trust proxy", 1);
app.use(
  session({
    secret: SESSION_SECRET,
    saveUninitialized: false,
    resave: false,
    cookie: {
      secure: false,
      httpOnly: false,
      // sameSite: "none",
      maxAge: 36000000,
    },
    store: new RedisStore({ client: redisClient }),
  })
);
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/v1", indexRouter);
app.use("/api/v1/users", usersRouter);
app.use("/api/v1/catalog", catalogRouter);

app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send("error");
});

module.exports = app;
