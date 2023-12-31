import { Tours } from './tours.model';

// if (await Tours.isTourExists(tours.id)) {
//     throw new Error('User already exists')
// }

const getAllToursFromDb = async () => {
  const result = await Tours.find();

  return result;
};

const getSingleTourFromDb = async (id: string) => {
  // const result = await Tours.findOne({ id: id })
  const result = await Tours.aggregate([
    {
      $match: { id: id },
    },
  ]);
  return result;
};

const updateDataFromDb = async (id: string, title: string, price: number) => {
  const result = await Tours.updateOne(
    { id: id },
    {
      $set: {
        title: title,
        price: price,
      },
    },
  );
  return result;
};

const deleteSingleTourFromDb = async (id: string) => {
  const result = await Tours.updateOne({ id: id }, { isDeleted: true });
  return result;
};

export const toursServices = {
  getAllToursFromDb,
  getSingleTourFromDb,
  updateDataFromDb,
  deleteSingleTourFromDb,
};
