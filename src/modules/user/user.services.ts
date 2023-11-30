import { TTours } from '../tours/tours.interface';
import { Tours } from '../tours/tours.model';
import { User } from './user.model';
import { TUser } from './users.interface';

const createTourIntoDb = async (password: string, payload: TTours) => {

  const userData: Partial<TUser> = {};
  userData.id = '123456';
  userData.password = password;
  userData.role = 'tours'
  

  const newUser = await User.create(userData);

  payload.id = newUser.id;
  payload.user = newUser._id

  const newTour = await Tours.create(payload);

  return newTour;
};

export const userServices = {
    createTourIntoDb
}