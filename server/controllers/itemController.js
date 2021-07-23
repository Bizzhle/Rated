const Item = require("../models/item");
const Category = require("../models/category");
const Store = require("../models/store");

const async = require("async");
const { body, validationResult } = require("express-validator");
// const category = require("../models/category");
// const { default: next } = require("next");

exports.index = function (req, res) {
  async.parallel(
    {
      item_count: function (callback) {
        Item.countDocuments({}, callback);
      },
      category_count: function (callback) {
        Category.countDocuments({}, callback);
      },
      store_count: function (callback) {
        Store.countDocuments({}, callback);
      },
    },
    function (err, results) {
      res.json({
        error: err,
        data: results,
      });
    }
  );

  // res.send("NOT IMPLEMENTED: Site Home Page");
};

// display list of all items
exports.item_list = function (req, res, next) {
  Item.find({}, "title category")
    .populate("category")
    .exec(function (err, list_items) {
      if (err) {
        return next(err);
      }
      res.status(200).json(list_items);
    });
};

// Display detail page for a specific item.
exports.item_detail = function (req, res, next) {
  Item.findById(req.params.id)
    .populate("category")
    .populate("store")
    .exec(function (err, results) {
      if (err) {
        return next(err);
      }

      res.status(200).send(results);
    });
};

// create form on GET.
exports.item_create_get = function (req, res, next) {
  async.parallel(
    {
      categories: function (callback) {
        Category.find(callback);
      },
      stores: function (callback) {
        Store.find(callback);
      },
    },
    function (err, results) {
      if (err) return next(err);
      res.status(201).send({
        categories: results.categories,
        stores: results.stores,
      });
    }
  );
};

// create form on Post
exports.item_create_post = [
  //Convert the category to an array
  (req, res, next) => {
    if (!(req.body.category instanceof Array)) {
      if (typeof req.body.category === "undefined") req.body.category = [];
      else req.body.category = new Array(req.body.category);
    }
    next();
  },

  //Convert the store to an array
  (req, res, next) => {
    if (!(req.body.store instanceof Array)) {
      if (typeof req.body.store === "undefined") req.body.store = [];
      else req.body.store = new Array(req.body.store);
    }
    next();
  },
  // // Validate and sanitize fields.
  body("title", "Title must not be empty.")
    .trim()
    .isLength({ min: 2 })
    .escape(),
  body("comment", "Comment must not be empty.")
    .trim()
    .isLength({ min: 2 })
    .escape(),
  body("category", "must be selected").trim().isLength({ min: 2 }).escape(),
  body("store", "must be selected").trim().isLength({ min: 2 }).escape(),
  body("rating", "rating must be selected")
    .trim()
    .isLength({ min: 2 })
    .escape(),

  // // Process request after validation and sanitization
  (req, res, next) => {
    // Extract the validation errors from a request.
    const errors = validationResult(req);

    // Create a Item object with escaped and trimmed data.

    const item = new Item({
      title: req.body.title,
      comment: req.body.comment,
      category: req.body.category,
      store: req.body.store,
      rating: req.body.rating,
    });

    if (!errors.isEmpty()) {
      // There are errors. json form again with sanitized values/error messages.
      // Get all categories and stores for form
      async.parallel(
        {
          categories: function (callback) {
            Category.find(callback);
          },
          stores: function (callback) {
            Stores.find(callback);
          },
        },
        function (err, results) {
          if (err) {
            return next(err);
          }
          // Mark our selected genres as checked.
          // for (let i = 0; i < results.categories.length; i++) {
          //   if (item.category.indexOf(results.categories[i]._id) > -1) {
          //     results.categories[i].selected = "true";
          //   }
          // }
          // // Mark our selected genres as checked.
          // for (let i = 0; i < results.stores.length; i++) {
          //   if (item.store.indexOf(results.stores[i]._id) > -1) {
          //     results.stores[i].selected = "true";
          //   }
          // }
          res.status(400).send({
            categories: results.categories,
            stores: results.stores,
            item: item,
            errors: errors.array(),
          });
        }
      );
      return;
    } else {
      //Data from form is valid. save item
      item.save(function (err) {
        if (err) {
          return next(err);
        }
        // Successful - redirect to new book record.
        res.status(201).send(item.url);
      });
    }
  },
];

// Handle item delete on get
exports.item_delete_get = function (req, res, next) {
  async.parallel(
    {
      item: function (callback) {
        Item.findById(req.params.id)
          .populate("category")
          .populate("store")
          .exec(callback);
      },
    },
    function (err, results) {
      if (err) return next(err);
      if (results.item == null) {
        res.status(201).json({ status: "item not available" });
      }
      //succesful
      res.status(200).json({
        item: results.item,
      });
    }
  );
};

// Handle item delete on post.
exports.item_delete_post = function (req, res, next) {
  Item.findByIdAndRemove(req.params.id, function deleteItem(err) {
    if (err) {
      return next(err);
    }
    // success
    res.status(201).json({ status: "successful" });
  });
};

// Handle item update on get.
exports.item_update_get = function (req, res, next) {
  // Get item, categories and stores for form.
  async.parallel(
    {
      item: function (callback) {
        Item.findById(req.params.id)
          .populate("store")
          .populate("category")
          .exec(callback);
      },
      categories: function (callback) {
        Category.find(callback);
      },
      stores: function (callback) {
        Store.find(callback);
      },
    },
    function (err, results) {
      if (err) {
        return next(err);
      }
      if (results.item == null) {
        // No results.
        var err = new Error("Item not found");
        err.status = 404;
        return next(err);
      }
      // Success.

      res.status(201).json({
        category: results.categories,
        store: results.stores,
        item: results.item,
      });
    }
  );
};

exports.item_update_post = [
  //Convert the category to an array
  (req, res, next) => {
    if (!(req.body.category instanceof Array)) {
      if (typeof req.body.category === "undefined") req.body.category = [];
      else req.body.category = new Array(req.body.category);
    }
    next();
  },

  //Convert the store to an array
  (req, res, next) => {
    if (!(req.body.store instanceof Array)) {
      if (typeof req.body.store === "undefined") req.body.store = [];
      else req.body.store = new Array(req.body.store);
    }
    next();
  },

  // // Validate and sanitize fields.
  body("title", "Title must not be empty.")
    .trim()
    .isLength({ min: 2 })
    .escape(),
  body("comment", "Comment must not be empty.")
    .trim()
    .isLength({ min: 2 })
    .escape(),
  body("category", "must be selected").trim().isLength({ min: 3 }).escape(),
  body("store", "must be selected").trim().isLength({ min: 3 }).escape(),
  body("rating", "rating must be selected")
    .trim()
    .isLength({ min: 2 })
    .escape(),

  // Process request after validation and sanitization.
  (req, res, next) => {
    // Extract the validation errors from a request.
    const errors = validationResult(req);

    // Create a Book object with escaped/trimmed data and old id.
    const item = new Item({
      title: req.body.title,
      comment: req.body.comment,
      category: req.body.category,
      store: req.body.store,
      rating: req.body.rating,
      _id: req.params.id, //This is required, or a new ID will be assigned!
    });

    if (!errors.isEmpty()) {
      // There are errors. Render form again with sanitized values/error messages.

      // Get all authors and genres for form.
      async.parallel(
        {
          categories: function (callback) {
            Category.find(callback);
          },
          stores: function (callback) {
            Stores.find(callback);
          },
        },
        function (err, results) {
          if (err) {
            return next(err);
          }

          // Mark our selected genres as checked.
          for (let i = 0; i < results.stores.length; i++) {
            if (item.store.indexOf(results.stores[i]._id) > -1) {
              results.stores[i].selected = "true";
            }
          }

          for (let i = 0; i < results.categories.length; i++) {
            if (item.category.indexOf(results.categories[i]._id) > -1) {
              results.categories[i].selected = "true";
            }
          }
          res.status(200).json({
            categories: results.categories,
            stores: results.stores,
            item: item,
            errors: errors.array(),
          });
        }
      );
      return;
    } else {
      // Data from form is valid. Update the record.
      Item.findByIdAndUpdate(req.params.id, item, {}, function (err, theitem) {
        if (err) {
          return next(err);
        }
        // Successful - send to item detail page.
        res.status(201).send(item.url);
      });
    }
  },
];

// "Routes" to forward the supported requests (and any information encoded in request URLs) to the appropriate controller functions.
// Controller functions to get the requested data from the models, create an HTML page displaying the data, and return it to the user to view in the browser.
