import mongoose from 'mongoose';
import generateRandomNumberString from '../../utils/gernateRandomId';
import { TTourGuide } from '../tourGuide/tourGuide.interface';
import { TourGuide } from '../tourGuide/tourGuide.model';
import { TTours } from '../tours/tours.interface';
import { Tours } from '../tours/tours.model';
import { User } from './user.model';
import { TUser } from './users.interface';
import { AppError } from '../../errors/appError';
import httpStatus from 'http-status';

const createTourIntoDb = async (password: string, payload: TTours) => {
  const userData: Partial<TUser> = {};

  userData.password = password;
  userData.role = 'tours';
  // set user id randomly
  userData.id = generateRandomNumberString(10);

  // start session
  const session = await mongoose.startSession();

  try {
    session.startTransaction();

    // create a user => transaction 1
    const newUser = await User.create([userData], { session });

    if (!newUser.length) {
      throw new Error('Falied to create a user');
    }

    payload.id = newUser[0].id;
    payload.user = newUser[0]._id;

    // create a new tour => transaction 2
    const newTour = await Tours.create([payload], { session });

    await session.commitTransaction();
    await session.endSession();

    return newTour;

  } catch (error) {
    session.abortTransaction();
    session.endSession();
    throw new AppError(httpStatus.BAD_REQUEST, "Failed to create")
  }
};

const createTourGuideIntoDb = async (password: string, payload: TTourGuide) => {
  const userData: Partial<TUser> = {};

  userData.password = password;
  userData.role = 'hosts';

  // set user id randomly
  userData.id = generateRandomNumberString(10);
  const newUser = await User.create(userData);

  // if(await Tours.isTourExists){
  //   throw new Error ('This Tour already exists')
  // }

  payload.id = newUser.id;
  const newTourGuide = await TourGuide.create(payload);

  return newTourGuide;
};

export const userServices = {
  createTourIntoDb,
  createTourGuideIntoDb,
};
