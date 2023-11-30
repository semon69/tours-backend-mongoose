import express from 'express'
import { userController } from "./user.controller";
import validateRequest from "../../middlewares/validateRequest";
import { userValidations } from "./user.validation.zod";

const router = express.Router();


router.post('/create-tours', validateRequest(userValidations.userSchemaZod), userController.createTours)

export const UserRoutes = router