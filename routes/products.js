const router = require("express").Router();
const productsController = require("../controllers/productsController");


router.post("/", productsController.product_create);
router.get("/", productsController.product_all);
router.get('/:productId', productsController.product_details);
router.put("/:productId", productsController.product_update);
router.delete("/:productId", productsController.product_delete);

module.exports = router;