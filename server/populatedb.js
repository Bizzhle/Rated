#! /usr/bin/env node

console.log(
  "This script populates some test books, authors, genres and bookinstances to your database. Specified database as argument - e.g.: populatedb mongodb+srv://cooluser:coolpassword@cluster0.a9azn.mongodb.net/local_library?retryWrites=true"
);

// Get arguments passed on command line
var userArgs = process.argv.slice(2);
/*
if (!userArgs[0].startsWith('mongodb')) {
    console.log('ERROR: You need to specify a valid mongodb URL as the first argument');
    return
}
*/
var async = require("async");
var Item = require("./models/item");
var Category = require("./models/category");
var Store = require("./models/store");

var mongoose = require("mongoose");
var mongoDB = userArgs[0];
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

var stores = [];
var categories = [];
var items = [];

function storeCreate(name, cb) {
  var store = new Store({ name: name });

  store.save(function (err) {
    if (err) {
      cb(err, null);
      return;
    }
    console.log("New Store: " + store);
    stores.push(store);
    cb(null, store);
  });
}

function categoryCreate(name, cb) {
  var category = new Category({ name: name });

  category.save(function (err) {
    if (err) {
      cb(err, null);
      return;
    }
    console.log("New Category: " + category);
    categories.push(category);
    cb(null, category);
  });
}

function itemCreate(title, comment, rating, category, store, cb) {
  itemdetail = {
    title: title,
    comment: comment,
    rating: rating,
  };
  if (category != false) itemdetail.category = category;
  if (store != false) itemdetail.store = store;

  var item = new Item(itemdetail);
  item.save(function (err) {
    if (err) {
      cb(err, null);
      return;
    }
    console.log("New Item: " + item);
    items.push(item);
    cb(null, item);
  });
}

function createCategoryStore(cb) {
  async.series(
    [
      function (callback) {
        categoryCreate("Clothing", callback);
      },
      function (callback) {
        categoryCreate("Furniture", callback);
      },
      function (callback) {
        storeCreate("Zalando", callback);
      },
      function (callback) {
        storeCreate("Ikea", callback);
      },
    ],
    cb
  );
}

function createItems(cb) {
  async.parallel(
    [
      function (callback) {
        itemCreate(
          "Armarni T-shirt",
          "Lovely shirt, will buy again",
          "Very good",
          [categories[0]],
          [stores[0]],

          callback
        );
      },
      function (callback) {
        itemCreate(
          "Ikea office Chair",
          "Very comfortable, enjoing it so far",
          "Very good",
          [categories[1]],
          [stores[1]],

          callback
        );
      },

      function (callback) {
        itemCreate(
          "Table Lamp",
          "Not so nice",
          "Bad",
          [categories[1]],
          [stores[0]],

          callback
        );
      },
    ],
    // optional callback
    cb
  );
}

async.series(
  [createCategoryStore, createItems],
  // Optional callback
  function (err, results) {
    if (err) {
      console.log("FINAL ERR: " + err);
    } else {
      console.log("Items: " + items);
    }
    // All done, disconnect from database
    mongoose.connection.close();
  }
);
