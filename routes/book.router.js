const express = require("express");
const router = express.Router();

const bookController = require('../controllers/book.controller');

router.get("/", bookController.getAll);
router.get("/:id", bookController.getById);
router.post("/", bookController.insert);
router.put("/:id", bookController.update);
router.delete("/:id", bookController.delete);

module.exports = router;
