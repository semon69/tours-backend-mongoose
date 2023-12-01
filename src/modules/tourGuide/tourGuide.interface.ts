import { TUserName } from "../tours/tours.interface";

export type TTourGuide = {
  id: string;
  name: TUserName;
  experience: string;
  language: Array<string>;
  contact: string;
  profileImg?: string;
};
