import { Router } from "express";
import { body } from "express-validator";
import { handleInputErrors } from "./modules/middleware";
import { createProduct, getProducts } from "./handlers/product";
//import { getOneProduct } from "./handlers/product";

const router = Router();

/**
 * Produto
 */

router.get("/product", getProducts);
router.get("/product/:id", (req, res) => {});
router.post(
  "/product",
  body("name").isString(),
  handleInputErrors,
  createProduct
);
router.put("/product/:id", body("name").isString(), handleInputErrors);
router.delete("/product/:id", (req, res) => {});

/**
 * Update
 */

router.get("/update", () => {});
router.get("/update/:id", (req, res) => {});
router.post(
  "/update",
  body("title").exists().isString(),
  body("body").exists().isString(),

  (req, res) => {}
);
router.put(
  "/update/:id",
  body("title").optional(),
  body("body").optional(),
  body("status").isIn(["IN_PROGRESS", "SHIPPED", "DEPRECATED"]),
  body("version").optional(),
  () => {}
);
router.delete("/update/:id", () => {});

/**
 * Update Point
 */

router.get("/updatepoint", (req, res) => {});
router.get("/updatepoint/:id", (req, res) => {});
router.post(
  "/updatepoint",
  body("name").isString(),
  body("description").isString(),
  body("updateId").exists().isString(),

  (req, res) => {}
);
router.put(
  "/updatepoint/:id",
  body("name").optional().isString(),
  body("description").optional().isString(),
  () => {}
);
router.delete(
  "/updatepoint/:id",

  (req, res) => {}
);

export default router;
