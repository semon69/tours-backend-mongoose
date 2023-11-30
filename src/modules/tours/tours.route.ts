import express from 'express';
import { toursController } from './tours.controller';
const router = express.Router()

router.get("/", toursController.getAllTours)
router.get("/:id", toursController.getSingleTour)
router.put("/:id", toursController.updateSingleData)
router.put("/:id", toursController.deleteSingleTour)

export const ToursRoutes = router;