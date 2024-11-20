import { z } from "zod"

const passwordRegex = {
    hasUpperCase: /[A-Z]/,
    hasLowerCase: /[a-z]/,
    hasNumber: /[0-9]/,
    hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/,
}

const passwordSchema = z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .max(20, 'Password must be less than 20 characters')
    .regex(passwordRegex.hasUpperCase, 'Password must contain at least one uppercase letter')
    .regex(passwordRegex.hasLowerCase, 'Password must contain at least one lowercase letter')
    .regex(passwordRegex.hasNumber, 'Password must contain at least one number')
    .regex(passwordRegex.hasSpecialChar, 'Password must contain at least one special character')

export const loginSchema = z.object({
    username: z
        .string()
        .min(3, 'Username must be at least 3 characters')
        .max(20, 'Username must be less than 20 characters'),
    password: passwordSchema
})

export const signupSchema = z.object({
    username: z
        .string()
        .min(3, 'Username must be at least 3 characters')
        .max(20, 'Username must be less than 20 characters'),
    password: passwordSchema,
    confirmPassword: passwordSchema
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
})

export type LoginInput = z.infer<typeof loginSchema>
export type SignupInput = z.infer<typeof signupSchema>