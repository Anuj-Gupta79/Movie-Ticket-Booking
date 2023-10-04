const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const { db_url } = process.env;

exports.connect = () => {
  mongoose
    .connect(db_url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Database connected successfully!");
    })
    .catch((err) => {
      console.log("Database connection is failed. exiting now....");
      console.log(err);
      process.exit(1);
    });
};
