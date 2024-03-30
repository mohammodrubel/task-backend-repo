import { z } from 'zod';

const productValidation = z.object({
    body: z.object({
        name: z.string(),
        completed: z.string().default('PENDING'),
        orderDate: z.string(),
        price: z.number(),
    }),
});

export default productValidation;