const express = require("express");
const router = express.Router();
const { quizController } = require("../controller/quizController");

router.get("/quizes", quizController.getAllQuize);
router.get("/addQuiz",quizController.addQuizForm);

module.exports = router;
