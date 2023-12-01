import { NextFunction, Request, Response } from 'express';
import { userServices } from './user.services';

const createTours = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { password, tours } = req.body;
    const result = await userServices.createTourIntoDb(password, tours);
    res.status(200).json({
      success: true,
      message: 'Create Tour data successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const createTourGuide = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const {password, tourGuide } = req.body;
    
    const result = await userServices.createTourGuideIntoDb(password, tourGuide);
    res.status(200).json({
      success: true,
      message: 'Create Tour Guide data successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const userController = {
  createTours,
  createTourGuide
};
