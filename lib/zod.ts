import z from 'zod';
import { ACCEPTED_IMAGE_TYPES, ACCEPTED_PDF_TYPES, MAX_FILE_SIZE } from '@/lib/constants';

export const UploadSchema = z.object({
    title: z.string().min(1, 'Title is required'),
    author: z.string().min(1, 'Author name is required'),
    bookFile: z.any()
        .refine((file) => !!file, 'PDF file is required')
        .refine((file) => file instanceof File, 'Must be a file')
        .refine((file) => file.size <= MAX_FILE_SIZE, `File size must be less than ${MAX_FILE_SIZE / (1024 * 1024)}MB`)
        .refine((file) => ACCEPTED_PDF_TYPES.includes(file.type), 'Only .pdf format is supported'),
    coverImage: z.any()
        .optional()
        .refine((file) => !file || file instanceof File, 'Must be a file')
        .refine((file) => !file || ACCEPTED_IMAGE_TYPES.includes(file.type), 'Only .jpg, .jpeg, .png and .webp formats are supported'),
    voice: z.string().min(1, 'Voice is required'),
});
