const router = require("express").Router();
const pizzaRoutes = require("./pizza-routes");

//add prefix of `/pizzaS` to routes created in `pizza-routes.js`
router.use("/pizzas", pizzaRoutes);

mosule.exports = router;
