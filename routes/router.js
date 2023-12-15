import { Router } from "express";
import libroRoutes from "./libroRutes.js";
import { notFound } from "../midlewares/notFound.js";
const router = Router();

router.use("/libros", libroRoutes)
router.use(notFound)

export default router;
