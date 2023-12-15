import { Router } from "express";
import LibroController from "../controllers/libroController.js";
const librosRoutes = Router();
const libroController = new LibroController();

librosRoutes.post("/", libroController.create);
librosRoutes.get("/", libroController.getAll)
librosRoutes.delete("/:codigo", libroController.delete)


export default librosRoutes;
