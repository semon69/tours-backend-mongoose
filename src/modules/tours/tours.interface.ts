import { Types } from "mongoose";

export type TUserName = {
    firstName: string;
    middleName?: string;
    lastName: string;
};

export type TLocation = {
    name: string,
    description: string,
    activities: Array<string>
}
export type TTours = {
    id: string,
    user: Types.ObjectId,
    tourCode: string,
    title: string,
    description: string,
    duration: number,
    location: TLocation,
    price: number,
    currency: string,
    startDate: string,
    endDate: string,
    tourSize: number,
    includes: Array<string>,
    tourGuide: Types.ObjectId,
    isDeleted?: boolean
};

// original, static method
// export interface TourModel extends Model<TTours> {
//     // eslint-disable-next-line no-unused-vars
//     isTourExists(id: string): Promise<TTours | null>
// }

// export type TToursMethods = {
//     isTourExists(id: string): Promise<TTours | null>
// }

// export type TourModel = Model<TTours, Record<string, never>, TToursMethods>