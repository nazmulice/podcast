const slugify = require("slugify");
const Category = require("../models/category-model");

exports.createCategory = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name.trim()) {
      return res.json({ error: "Name is required" });
    }

    const existingCategory = await Category.findOne({ name });

    if (existingCategory) {
      return res.json({ error: "Category already exists" });
    }

    const category = await new Category({ name, slug: slugify(name) }).save();
    res.status(201).json(category);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.updateCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const { categoryId } = req.params;

    const category = await Category.findByIdAndUpdate(
      categoryId,
      {
        name,
        slug: slugify(name),
      },
      { new: true }
    );

    res.json({ status: "success", category });
  } catch (error) {
    res.json({ error: "Internal server error" });
  }
};

exports.removeCategory = async (req, res) => {
  try {
    const removed = await Category.findByIdAndDelete(req.params.categoryId);
    res.json({ status: "remove successfully", removed });
  } catch (error) {
    return res.status(400).json({ error: error });
  }
};

exports.allCategory = async (req, res) => {
  try {
    const all = await Category.find({});
    res.json({ status: "success", all });
  } catch (error) {
    res.json(error.message);
  }
};

exports.singleCategory = async (req, res) => {
  try {
    const category = await Category.findOne({ slug: req.params.slug });
    res.status(200).json(category);
  } catch (error) {
    res.json({ message: error });
  }
};
