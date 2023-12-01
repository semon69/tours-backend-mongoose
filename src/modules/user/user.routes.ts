import express from 'express'
import { userController } from "./user.controller";
import validateRequest from "../../middlewares/validateRequest";
import { toursValidation } from '../tours/tours.validation.zod';
import { tourGuideValidation } from '../tourGuide/tourGuide.validation';

const router = express.Router();


router.post('/create-tours', validateRequest(toursValidation.ToursSchemaZod), userController.createTours)

router.post('/create-tourGuide', validateRequest(tourGuideValidation.TourGuideSchemaZod), userController.createTourGuide)

export const UserRoutes = router