import { Model } from "mongoose";

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

export type TTourGuide = {
    name: TUserName,
    experience: string,
    language: string[],
    contact: string,
    profileImg?: string
}

export type TTours = {
    id: string,
    password: string,
    title: string,
    description: string,
    duration: number,
    location: TLocation,
    price: number,
    currency: string,
    startDate: string,
    endDate: string,
    tourSize: number,
    includes: string[],
    tourGuide: TTourGuide,
    isDeleted?: boolean
};

// original, static method
export interface TourModel extends Model<TTours> {
    isTourExists(id: string): Promise<TTours | null>
}

// export type TToursMethods = {
//     isTourExists(id: string): Promise<TTours | null>
// }

// export type TourModel = Model<TTours, Record<string, never>, TToursMethods>