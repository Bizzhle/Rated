const express = require("express");
const router = express.Router();
const item_controller = require("../controllers/itemController");
const category_controller = require("../controllers/categoryController");
const store_controller = require("../controllers/storeController");
const protect = require("../middleware/authMiddleware");

// Item Routes
// Get catalog home page

// GET request for creating an Item
router.get("/item/create", item_controller.item_create_get);

// POST request for creating a Item
router.post("/item/create", item_controller.item_create_post);

// GET request for one item.
router.get("/item/:id", item_controller.item_detail);

//Get request for list of all items
router.get("/items", item_controller.item_list);

//Category routes
// GET request for creating an category
router.get("/category/create", category_controller.category_create_get);

// POST request for creating a category
router.post(
  "/category/create",
  protect,

  category_controller.category_create_post
);

// GET request for one category.
router.get("/category/:id", category_controller.category_detail);

//Get request for list of all categories
router.get("/categories", category_controller.category_list);

//Stores routes
// GET request for creating an store
router.get("/store/create", store_controller.store_create_get);

// POST request for creating a store
router.post("/store/create", protect, store_controller.store_create_post);

// GET request for one store.
router.get("/store/:id", store_controller.store_detail);

//Get request for list of all stores
router.get("/stores", store_controller.store_list);

module.exports = router;
