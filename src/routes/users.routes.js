import {response, Router} from "express";
import {methods as usersController} from "./../controllers/users.controller.js";

const router = Router();

router.get("/" , usersController.getUsers);

export default router;