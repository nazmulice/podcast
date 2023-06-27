const express = require("express");
const {
  requireSignIn,
  isAdmin,
} = require("../middleware/auth-verify-middleware");
const categoryController = require("../controllers/category-controller");
const router = express.Router();

// create category
router.post(
  "/category",
  requireSignIn,
  isAdmin,
  categoryController.createCategory
);

// update category
router.put(
  "/category/:categoryId",
  requireSignIn,
  isAdmin,
  categoryController.updateCategory
);

// delete category
router.delete(
  "/category/:categoryId",
  requireSignIn,
  isAdmin,
  categoryController.removeCategory
);

// get all category
router.get("/category", categoryController.allCategory);

// get single category
router.get("/category/:slug", categoryController.singleCategory);

module.exports = router;
