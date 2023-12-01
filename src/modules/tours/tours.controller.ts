import { Request, Response } from 'express';
import { toursServices } from './tours.service';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';

const getAllTours = catchAsync(async (req: Request, res: Response) => {
  const result = await toursServices.getAllToursFromDb();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Get Tours data successfully',
    data: result,
  });
});

const getSingleTour = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await toursServices.getSingleTourFromDb(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Get Single Tour data successfully',
    data: result,
  });
});

const updateSingleData = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const { title, price } = req.body;
  const result = await toursServices.updateDataFromDb(id, title, price);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Updated Tour data successfully',
    data: result,
  });
});

const deleteSingleTour = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await toursServices.deleteSingleTourFromDb(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Delete tour data successfully',
    data: result,
  });
});

export const toursController = {
  getAllTours,
  getSingleTour,
  updateSingleData,
  deleteSingleTour,
};
