import {response, Router} from "express";
import {methods as usersController} from "./../controllers/users.controller.js";

const router = Router();

router.get("/" , usersController.getUsers);
router.get("/message" , usersController.getMessage);

export default router;