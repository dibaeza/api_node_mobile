import {response, Router} from "express";
import {methods as indexController} from "./../controllers/index.controller.js";

const router = Router();

router.get("/" , indexController.getIndex);

export default router;