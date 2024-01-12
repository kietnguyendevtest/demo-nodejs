const express = require("express");
const router = express.Router();

const postController = require('../controllers/post.controller');

router.get("/", postController.getAll);
router.get("/:id", postController.getById);
router.post("/", postController.insert);
router.put("/:id", postController.update);
router.delete("/:id", postController.delete);

module.exports = router;
