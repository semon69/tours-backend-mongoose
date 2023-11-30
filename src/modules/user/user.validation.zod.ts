import { z } from 'zod';

// Define the Zod schema
const userSchemaZod = z.object({
  password: z
    .string({
      invalid_type_error: 'Password must be a string',
    })
    .max(20, {
      message: 'Password can not be more than 20 words',
    })
    .optional(),
});

export const userValidations = {
  userSchemaZod,
};
