const express = require("express");
const item_controller = require("../controllers/itemController");
const category_controller = require("../controllers/categoryController");
const store_controller = require("../controllers/storeController");
const protect = require("../middleware/authMiddleware");

const router = express.Router();

// Item Routes
// Get catalog home page

// GET request for creating an Item
router.get("/item/create", item_controller.item_create_get);

// POST request for creating a Item
router.post("/item/create", protect, item_controller.item_create_post);

// GET request for creating a Item
router.get("/item/:id/update", item_controller.item_update_get);

// POST request for updating a item
router.post("/item/:id/update", protect, item_controller.item_update_post);

// POST request for deleting a item
router.get("/item/:id/delete", item_controller.item_delete_get);

// POST request for deleting a item
router.delete("/item/:id/delete", protect, item_controller.item_delete_post);

// GET request for one item.
router.get("/item/:id", item_controller.item_detail);

//Get request for list of all items
router.get("/items", item_controller.item_list);

//Category routes
// GET request for creating an category
router.get(
  "/category/create",

  category_controller.category_create_get
);

// POST request for creating a category
router.post(
  "/category/create",
  protect,

  category_controller.category_create_post
);

// Get request for deleting a category
router.get(
  "/category/:id/delete",

  category_controller.category_delete_get
);

// POST request for deleting a category
router.delete(
  "/category/:id/delete",
  protect,
  category_controller.category_delete_post
);

// Get request for updating a category
router.get(
  "/category/:id/update",

  category_controller.category_update_get
);

// POST request for updating a category
router.post(
  "/category/:id/update",
  protect,
  category_controller.category_update_post
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

// Get request for deleting a store
router.get("/store/:id/delete", store_controller.store_delete_get);

// POST request for deleting a store
router.delete("/store/:id/delete", protect, store_controller.store_delete_post);

// Get request for updating a store
router.get("/store/:id/update", store_controller.store_update_get);

// POST request for updating a store
router.post("/store/:id/update", protect, store_controller.store_update_post);

// GET request for one store.
router.get("/store/:id", store_controller.store_detail);

//Get request for list of all stores
router.get("/stores", store_controller.store_list);

module.exports = router;
