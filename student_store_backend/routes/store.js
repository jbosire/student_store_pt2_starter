const express = require("express");
const Store = require("../models/store");
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const products = await Store.listProducts();
    res.status(200).json({ products: products });
  } catch (err) {
    next(err);
  }
});

router.post("/create", async (req, res, next) => {
  try {
    const exercises = req.body;

    const data = await Exercise.postExercise(exercises);

    res.status(201).json({ exercise: data });
  } catch (err) {
    next(err);
  }
});


module.exports = router;
