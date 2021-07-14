const router = require("express").Router();
const {
  getAllPizza,
  getPizzaById,
  createPizza,
  updatePizza,
  deletePizza,
} = require("../../controllers/pizza-controller");

// /api/pizzas
router.route("/").get(getAllPizza).post(createPizza);

// /api/pizzas/:id
router.route("/:id").get(getPizzaById).put(updatePizza).delete(deletePizza);

module.exports = router;
// const router = require("express").Router();
// const {
//   getAllPizza,
//   getPizzaById,
//   createPizza,
//   updatePizza,
//   deletePizza,
// } = require("../../controllers/pizza-controller");

// //set up GET all and POST at /api/pizza
// router.route("/").get(getAllPizza).post(createPizza);

// //set up GET one, PUT, and delete at /api/pizzas/:id
// router.route("/:id").get(getPizzaById).put(updatePizza).delete(deletePizza);

// module.exports = router;
