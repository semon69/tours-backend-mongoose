import { Tours } from '../tours/tours.model';

const findLastTourCode = async () => {
  const lastStudent = await Tours.find()
    .sort({
      createdAt: -1,
    })
    .lean();
  console.log(lastStudent[0]?.tourCode);

  return lastStudent[0]?.tourCode;
};

export const generateTourCode = async () => {
  const currentId = await findLastTourCode() || 0; // default last 4 digit
  //   const lastStudentYear = lastStudent?.substring(0, 4);
  //   const lastStudentCode = lastStudent?.substring(4, 6);
  //   const currentStudentYear = payload.year;
  //   const currentStudentCode = payload.code;

  //   if (
  //     lastStudent &&
  //     lastStudentYear == currentStudentYear &&
  //     lastStudentCode == currentStudentCode
  //   ) {
  //     currentId = lastStudent?.substring(6);
  //   }

  const incrementId = (Number(currentId) + 1).toString().padStart(4, '0');
  console.log(currentId, incrementId);
  
  return incrementId;
};
