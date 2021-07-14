const router = require("express").Router();
const {
  addComment,
  removeComment,
  addReply,
  removeReply,
} = require("../../controllers/comment-controller");

// /api/comments/<pizzaId>
router.route("/:pizzaId").post(addComment);

// /api/comments/<pizzaId>/<commentId>
router.route("/:pizzaId/:commentId").put(addReply).delete(removeComment);

//DELETE route to handle removeReply. You'll need to create a new route for this one, because you'll need the id of the individual reply, not just its parent.
router.route("/:pizzaId/:commentId/:replyId").delete(removeReply);
module.exports = router;
