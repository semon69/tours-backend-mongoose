import { z } from 'zod';

// Define Zod schema based on the Mongoose model
const UserNameSchema = z.object({
  firstName: z
    .string()
    .min(1, { message: 'First Name is required' })
    .max(255) // Adjust the maximum length as needed
    .regex(/^[A-Za-z]+$/, {
      message: 'First Name should only contain letters',
    }),
  middleName: z.string().optional(),
  lastName: z
    .string()
    .min(1, { message: 'Last Name is required' })
    .max(255) // Adjust the maximum length as needed
    .regex(/^[A-Za-z]+$/, { message: 'Last Name should only contain letters' }),
});

const TourGuideSchemaZod = z.object({
  body: z.object({
    password: z.string(),
    tourGuide: z.object({
      name: UserNameSchema,
      experience: z.string().min(1),
      language: z.array(z.string()).min(1),
      contact: z.string().min(1),
      profileImg: z.string().optional(),
    }),
  }),
});

export const tourGuideValidation = {
  TourGuideSchemaZod,
};
