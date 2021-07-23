const Store = require("../models/store");
const Item = require("../models/item");
const async = require("async");
const { body, validationResult } = require("express-validator");

// display list of all category
exports.store_list = function (req, res) {
  Store.find()
    .sort([["name", "ascending"]])
    .exec(function (err, list_stores) {
      if (err) {
        return next(err);
      }
      // Successful, so render.
      // res.json("store_list", {
      //   title: "Store List",
      //   list_stores: list_stores,
      // });
      res.status(200).json(list_stores);
    });
};

// Display detail page for a specific category.
exports.store_detail = function (req, res, next) {
  async.parallel(
    {
      store: function (callback) {
        Store.findById(req.params.id).exec(callback);
      },
      store_items: function (callback) {
        Item.find({ store: req.params.id })
          .populate("store")
          .populate("category")
          .exec(callback);
      },
    },
    function (err, results) {
      if (err) {
        return next(err);
      }
      if (results.store == null) {
        const err = new Error("store not found");
        err.status = 404;
        return next(err);
      }
      res.status(200).json({
        store: results.store,
        store_items: results.store_items,
      });
    }
  );
};

// Display category create form on GET.
exports.store_create_get = function (req, res, next) {
  res.status(200).json("store_form", { title: "Create store" });
};

// Handle store create on POST.
exports.store_create_post = [
  //validate and sanitize the name field
  // trim() is used to remove any trailing/leading whitespace, checks that the name field is not empty, and then uses escape() to remove any dangerous HTML characters).
  body("name", "Store name required").trim().isLength({ min: 2 }).escape(),

  // Process request after validation and sanitization
  (req, res, next) => {
    // Extract the validation errors froma  request
    const errors = validationResult(req);

    // Create a category object with escaped and trimmed data
    const store = new Store({ name: req.body.name });

    if (!errors.isEmpty()) {
      //There are errors . Render the form again with sanitized values/error messages.

      res.status(400).json({
        store: store,
        errors: errors.array(),
      });
      return;
    } else {
      // Data from form is valid
      // Check if Category with same name already exists.
      Store.findOne({ name: req.body.name }).exec(function (err, found_store) {
        if (err) return next(err);

        if (found_store) {
          // store exists, redirect to its store page
          // res.status(200, "store already exists").send(found_store.url);
          res.status(200).json({ status: "Already exists" });
        } else {
          store.save(function (err) {
            if (err) {
              return next(err);
            }
            //store is saved
            res.status(201).send(store.url);
          });
        }
      });
    }
  },
];

exports.store_update_get = function (req, res, next) {
  Store.findById(req.params.id, function (err, store) {
    if (err) {
      return next(err);
    }
    if (store == null) {
      const err = new Error("store not found");
      err.status = 404;
      return next(err);
    }
    res.status(201).json({ store: store });
  });
};

exports.store_update_post = [
  // Validate and sanitze the name field.
  body("name", "Store name must contain at least 3 characters")
    .trim()
    .isLength({ min: 3 })
    .escape(),

  // Process request after validation and sanitization.
  (req, res, next) => {
    // Extract the validation errors from a request .
    const errors = validationResult(req);

    // Create a genre object with escaped and trimmed data (and the old id!)
    var store = new Store({
      name: req.body.name,
      _id: req.params.id,
    });

    if (!errors.isEmpty()) {
      // There are errors. Render the form again with sanitized values and error messages.
      res.status(400).json({ store: store, errors: errors.array() });
      return;
    } else {
      // Data from form is valid. Update the record.
      Store.findByIdAndUpdate(
        req.params.id,
        store,
        {},
        function (err, thestore) {
          if (err) {
            return next(err);
          }
          // Successful - redirect to genre detail page.
          res.status(201).json({ store: thestore });
        }
      );
    }
  },
];

exports.store_delete_get = function (req, res, next) {
  async.parallel(
    {
      store: function (callback) {
        Store.findById(req.params.id).exec(callback);
      },
      store_items: function (callback) {
        Item.find({ store: req.params.id }).exec(callback);
      },
    },
    function (err, results) {
      if (err) return next(err);
      if (results.store == null) {
        res.redirect("/catalog/stores");
      }
      // Successful, so render.
      res.status(200).json({
        store: results.store,
        store_items: results.store_items,
      });
    }
  );
};

exports.store_delete_post = function (req, res, next) {
  Store.findByIdAndRemove(req.params.id, function deleteStore(err) {
    if (err) {
      return next(err);
    }
    // Success - go to author list
    res.status(201).json({ status: "successful" });
  });
};
