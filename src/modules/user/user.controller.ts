import { Request, Response } from 'express';
import { userServices } from './user.services';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';

const createTours = catchAsync(async (req: Request, res: Response) => {
  const { password, tours } = req.body;
  const result = await userServices.createTourIntoDb(password, tours);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Create Tour data successfully',
    data: result,
  });
});

const createTourGuide = catchAsync(async (req: Request, res: Response) => {
  const { password, tourGuide } = req.body;

  const result = await userServices.createTourGuideIntoDb(password, tourGuide);
  res.status(200).json({
    success: true,
    message: 'Create Tour Guide data successfully',
    data: result,
  });
});
export const userController = {
  createTours,
  createTourGuide,
};
