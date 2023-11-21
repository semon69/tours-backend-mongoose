import express from 'express';
import { toursController } from './tours.controller';
const router = express.Router()

router.post("/create-tours", toursController.createTours)
router.get("/", toursController.getAllTours)
router.get("/:id", toursController.getSingleTour)
router.put("/:id", toursController.deleteSingleTour)

export const ToursRouter = router;