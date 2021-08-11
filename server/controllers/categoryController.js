const Category = require("../models/category");
const Item = require("../models/item");

const async = require("async");
const { body, validationResult } = require("express-validator");

// const { default: next } = require("next");

// display list of all category
exports.category_list = function (req, res, next) {
  Category.find()
    .sort([["name", "ascending"]])
    .exec(function (err, list_categories) {
      if (err) {
        return next(err);
      }
      // Successful, so render.
      res.status(200).send(list_categories);
    });
};

// Display detail page for a specific category.
exports.category_detail = function (req, res, next) {
  async.parallel(
    {
      category: function (callback) {
        Category.findById(req.params.id).exec(callback);
      },
      category_items: function (callback) {
        Item.find({ category: req.params.id })
          .populate("store")
          .populate("category")
          .exec(callback);
      },
    },
    function (err, results) {
      if (err) {
        return next(err);
      }
      if (results.category == null) {
        const err = new Error("category not found");
        err.status = 404;
        return next(err);
      }
      res.status(200).json({
        category: results.category,
        category_items: results.category_items,
      });
    }
  );
};

// Display category create form on GET.
exports.category_create_get = function (req, res) {
  res.json("category_form", { title: "Create category" });
};

// Handle category create on POST.
exports.category_create_post = [
  //validate and sanitize the name field
  // trim() is used to remove any trailing/leading whitespace, checks that the name field is not empty, and then uses escape() to remove any dangerous HTML characters).
  body("name", "Category name required").trim().isLength({ min: 2 }).escape(),

  // Process request after validation and sanitization
  (req, res, next) => {
    // Extract the validation errors froma  request
    const errors = validationResult(req);

    // Create a category object with escaped and trimmed data
    var category = new Category({ name: req.body.name });

    if (!errors.isEmpty()) {
      //There are errors . Render the form again with sanitized values/error messages.
      res.status(400).json({
        category: category,
        errors: errors.array(),
      });
      return;
    } else {
      // Data from form is valid
      // Check if Category with same name already exists.
      Category.findOne({ name: req.body.name }).exec(function (
        err,
        found_category
      ) {
        if (err) return next(err);

        if (found_category) {
          // Category exists, redirect to its detail page
          res.status(200).json({ status: "already exists" });
        } else {
          category.save(function (err) {
            if (err) {
              return next(err);
            }
            //category is saved
            res.status(201).send(category.url);
          });
        }
      });
    }
  },
];

exports.category_update_get = function (req, res, next) {
  Category.findById(req.params.id, function (err, category) {
    if (err) {
      return next(err);
    }
    if (category == null) {
      const err = new Error("category not found");
      err.status = 404;
      return next(err);
    }
    res.status(201).send({ category: category });
  });
};

exports.category_update_post = [
  body("name", "Category name must contain at least 3 characters")
    .trim()
    .isLength({ min: 3 })
    .escape(),

  (req, res, next) => {
    const errors = validationResult(req);

    const category = new Category({
      name: req.body.name,
      _id: req.params.id,
    });

    if (!errors.isEmpty()) {
      res.status(400).json({
        category: category,
        errors: errors.array(),
      });
      return;
    } else {
      Category.findByIdAndUpdate(
        req.params.id,
        category,
        {},
        function (err, thecategory) {
          if (err) {
            return next(err);
          }
          // Successful - redirect to genre detail page.
          res.status(201).json({ category: thecategory });
        }
      );
    }
  },
];

exports.category_delete_get = function (req, res, next) {
  async.parallel(
    {
      category: function (callback) {
        Category.findById(req.params.id).exec(callback);
      },
      category_items: function (callback) {
        Item.find({ category: req.params.id }).exec(callback);
      },
    },
    function (err, results) {
      if (err) return next(err);
      if (results.category == null) {
        res.redirect("/catalog/categories");
      }
      // Successful, so render.
      res.status(200).json({
        category: results.category,
        category_items: results.category_items,
      });
    }
  );
};

exports.category_delete_post = function (req, res, next) {
  // Category has no items. Delete object and redirect to the list of authors.
  Category.findByIdAndRemove(req.params.id, function deleteCategory(err) {
    if (err) {
      return next(err);
    }
    // Success - go to author list
    res.status(201).json({ status: "successful" });
  });
};
