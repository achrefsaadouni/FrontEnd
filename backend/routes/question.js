const express = require("express");

const QuestionController = require("../controllers/question");
const authCheck = require("../middleware/check-auth");

const router = express.Router();

router.post("/", authCheck, QuestionController.createQuestion);

router.delete("/:id", authCheck, QuestionController.deleteQuestion);

router.get("/:id", authCheck, QuestionController.getQuestion);

router.get("/", authCheck, QuestionController.getQuestions);

router.put("/:id", authCheck, QuestionController.updateQuestion);

router.post("/like/:id", authCheck, QuestionController.likeQuestion);

router.post("/unlike/:id", authCheck, QuestionController.unlikeQuestion);

router.post("/comment/:id", authCheck, QuestionController.addCommenttoQuestion);

router.get("/comments/:id", QuestionController.getAllCommentsQuestions);

router.delete(
  "/:id/comment/:comment_id",
  authCheck,
  QuestionController.deleteCommenttoQuestion
);

router.post(
  "/comment/:id/:comment_id",
  authCheck,
  QuestionController.bestCommentQuestion
);

router.get("/get/badwords", QuestionController.getAllBadWords);

router.post("/badword", QuestionController.addBadWord);

router.delete("/badword/:id", QuestionController.deleteBadWord);

module.exports = router;
