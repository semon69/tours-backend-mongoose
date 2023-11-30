import { Request, Response } from "express";
import { toursServices } from './tours.service';

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

const updateSingleData = async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const { title, price } = req.body
        const result = await toursServices.updateDataFromDb(id, title, price)
        res.status(200).json({
            success: true,
            message: 'Updated Tour data successfully',
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
    getAllTours,
    getSingleTour,
    updateSingleData,
    deleteSingleTour,
}