import * as z from 'zod';


const LocationSchemaZod = z.object({
  name: z.string().min(1).max(50),
  description: z.string().min(1),
  activities: z.array(z.string()).min(1),
});


const ToursSchemaZod = z.object({
  body: z.object({
    password: z.string(),
    tours: z.object({
      tourCode: z.string().optional(),
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
      tourGuide: z.string(),
      isDeleted: z.boolean().optional(),
    }),
  }),
});

export const toursValidation ={
  ToursSchemaZod
};
