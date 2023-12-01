import { Schema, model } from "mongoose";
import { TUserName } from "../tours/tours.interface";
import { TTourGuide } from "./tourGuide.interface";

const UserNameSchema = new Schema<TUserName>({
    firstName: {
        type: String,
        required: [true, 'First Name is required'],
    },
    middleName: {
        type: String,
    },
    lastName: {
        type: String,
        required: [true, 'Last Name is required'],
    },
});

const tourGuideSchema = new Schema<TTourGuide>({
  id: {
    type: String,
    required: true,
    unique: true
  },
  name: UserNameSchema,
  experience: {
    type: String,
    required: [true, 'Experience is required'],
  },
  language: {
    type: [String],
    required: [true, 'At least one valid language is required'],
  },
  contact: {
    type: String,
    required: [true, 'Contact information is required'],
  },
  profileImg: { type: String },
});


export const TourGuide = model<TTourGuide>("TourGuide", tourGuideSchema)