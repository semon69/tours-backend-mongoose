import { Request, Response } from "express";
import { toursServices } from './tours.service';
import ToursSchemaZod from "./tours.validation.zod";

const createTours = async (req: Request, res: Response) => {
    try {
        const toursData = req.body
        const zodValidationTours = ToursSchemaZod.parse(toursData)

        const result = await toursServices.createToursIntoDb(zodValidationTours)
        res.status(200).json({
            success: true,
            message: 'Tours create successfully',
            data: result,
        });
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message || 'Something went wrong',
            error: error,
        });
    }
}

const getAllTours = async (req: Request, res: Response) => {
    try {
        const result = await toursServices.getAllToursFromDb()
        res.status(200).json({
            success: true,
            message: 'Get Tours data successfully',
            data: result,
        });
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message || 'Something went wrong',
            error: error,
        });
    }
}
const getSingleTour = async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const result = await toursServices.getSingleTourFromDb(id)
        res.status(200).json({
            success: true,
            message: 'Get Single Tour data successfully',
            data: result,
        });
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message || 'Something went wrong',
            error: error,
        });
    }
}
const deleteSingleTour = async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const result = await toursServices.deleteSingleTourFromDb(id)
        res.status(200).json({
            success: true,
            message: 'Delete Tour data successfully',
            data: result,
        });
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message || 'Something went wrong',
            error: error,
        });
    }
}

export const toursController = {
    createTours,
    getAllTours,
    getSingleTour,
    deleteSingleTour,
}