import * as z from 'zod';

// Define Zod schema based on the Mongoose model
const UserNameSchema = z.object({
    firstName: z.string()
        .min(1, { message: 'First Name is required' })
        .max(255) // Adjust the maximum length as needed
        .regex(/^[A-Za-z]+$/, { message: 'First Name should only contain letters' }),
    middleName: z.string().optional(),
    lastName: z.string()
        .min(1, { message: 'Last Name is required' })
        .max(255) // Adjust the maximum length as needed
        .regex(/^[A-Za-z]+$/, { message: 'Last Name should only contain letters' }),
});

const LocationSchemaZod = z.object({
    name: z.string().min(1).max(50),
    description: z.string().min(1),
    activities: z.array(z.string()).min(1),
});

const TourGuideSchemaZod = z.object({
    name: UserNameSchema,
    experience: z.string().min(1),
    language: z.array(z.string()).min(1),
    contact: z.string().min(1),
    profileImg: z.string().optional(),
});

const ToursSchemaZod = z.object({
    id: z.string().min(1),
    password: z.string().min(1),
    title: z.string().min(1),
    description: z.string().min(1),
    duration: z.number().min(1),
    location: LocationSchemaZod,
    price: z.number().min(1),
    currency: z.string().min(1),
    startDate: z.string().min(1),
    endDate: z.string().min(1),
    tourSize: z.number().min(1),
    includes: z.array(z.string()).min(1),
    tourGuide: TourGuideSchemaZod,
    isDeleted: z.boolean().optional()
});

export default ToursSchemaZod
