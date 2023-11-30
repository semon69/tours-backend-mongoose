import { Request, Response } from 'express';
import { userServices } from './user.services';

const createTours = async (req: Request, res: Response) => {
  try {
    const { password, tour } = req.body;
    const result = await userServices.createTourIntoDb(password, tour);
    res.status(200).json({
      success: true,
      message: 'Create Tour data successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Something went wrong',
      error: error,
    });
  }
};

export const userController = {
  createTours,
};
