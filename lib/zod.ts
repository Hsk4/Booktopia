import z from 'zod';

export const UploadSchema = z.object({
    title: z.string().min(1, 'Title is required'),
    author: z.string().min(1, 'Author name is required'),
    bookFile: z.any().refine((file) => !!file, 'PDF file is required'),
    coverImage: z.any().optional(),
    voice: z.string().min(1, 'Voice is required'),
});
