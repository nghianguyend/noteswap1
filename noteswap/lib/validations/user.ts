import * as z from "zod";
export const UserValidation = z.object({
    profile_photo: z.string().url().nonempty(),
    name: z.string().min(2).max(35),
    username: z.string().min(2).max(35),
    bio: z.string().min(3).max(1000),
});