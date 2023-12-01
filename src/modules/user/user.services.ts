import generateRandomNumberString from '../../utils/gernateRandomId';
import { TTourGuide } from '../tourGuide/tourGuide.interface';
import { TourGuide } from '../tourGuide/tourGuide.model';
import { TTours } from '../tours/tours.interface';
import { Tours } from '../tours/tours.model';
import { User } from './user.model';
import { TUser } from './users.interface';

const createTourIntoDb = async (password: string, payload: TTours) => {
  const userData: Partial<TUser> = {};

  userData.password = password;
  userData.role = 'tours';

  // set user id randomly
  userData.id = generateRandomNumberString(10);

  // check the user is already exist or not
  // const isUserExists = await User.isUserExists(userData.id);
  // if (isUserExists) {
  //   throw new Error('This User already exists');
  // }

  const newUser = await User.create(userData);
 
  payload.id = newUser.id;
  payload.user = newUser._id;

  // const isTourExist = await Tours.isTourExists(payload.id);
  // if (isTourExist) {
  //   throw new Error('This Tour already exists');
  // }

  const newTour = await Tours.create(payload);

  return newTour;
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
