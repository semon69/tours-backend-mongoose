import { Schema, model } from 'mongoose';
import { TLocation, TTourGuide, TTours, TUserName, TourModel } from './tours.interface';


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

const locationSchema = new Schema<TLocation>({
    name: {
        type: String,
        required: [true, 'Location name is required']
    },
    description: {
        type: String,
        required: [true, 'Location description is required']
    },
    activities: {
        type: [String],
        required: [true, 'At least one activity is required'],
    },
});

const tourGuideSchema = new Schema<TTourGuide>({
    name: UserNameSchema,
    experience: {
        type: String,
        required: [true, 'Experience is required']
    },
    language: {
        type: [String],
        enum: ['Bengali', 'English', 'Hindi', 'Urdu'],
        required: [true, 'At least one valid language is required'],
    },
    contact: {
        type: String,
        required: [true, 'Contact information is required']
    },
    profileImg: { type: String },
});

const tourSchema = new Schema<TTours, TourModel>({
    id: {
        type: String,
        required: [true, 'Tour ID is required'],
        unique: true
    },
    user: {
        type: Schema.Types.ObjectId,
        required: [true, 'User is required']
    },
    title: {
        type: String,
        required: [true, 'Title is required']
    },
    description: {
        type: String,
        required: [true, 'Description is required']
    },
    duration: {
        type: Number,
        required: [true, 'Duration is required']
    },
    location: {
        type: locationSchema,
        required: [true, 'Location details are required']
    },
    price: {
        type: Number,
        required: [true, 'Price is required']
    },
    currency: {
        type: String,
        required: [true, 'Currency is required']
    },
    startDate: {
        type: String,
        required: [true, 'Start date is required']
    },
    endDate: {
        type: String,
        required: [true, 'End date is required']
    },
    tourSize: {
        type: Number,
        required: [true, 'Tour size is required']
    },
    includes: {
        type: [String],
        enum: ["Accommodation", "Meals", "Transportation"],
        required: [true, 'At least one inclusion is required'],
    },
    tourGuide: {
        type: tourGuideSchema,
        required: [true, 'Tour guide details are required']
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
});

// Query middleware
tourSchema.pre('find', async function (next) {
    this.find({ isDeleted: { $ne: true } })
    next()
})
tourSchema.pre('findOne', async function (next) {
    this.find({ isDeleted: { $ne: true } })
    next()
})
tourSchema.pre('aggregate', async function (next) {
    this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } })
    next()
})

// for static method
tourSchema.statics.isTourExists = async function (id: string) {
    const existingTour = await Tours.findOne({ id })
    return existingTour
}

// custom instance method
// tourSchema.methods.isUserExists = async function (id: string) {
//     const existingUser = await Tours.findOne({ id })
//     return existingUser
// }

export const Tours = model<TTours, TourModel>("Tours", tourSchema)