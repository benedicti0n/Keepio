import { useForm, SubmitHandler } from "react-hook-form"
import Button from "../../ui/Button";
import { zodResolver } from "@hookform/resolvers/zod"
import { signupSchema } from "../../schema/auth.schema";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface SignupInput {
    username: string;
    password: string;
    confirmPassword: string;
}

// const PORT = import.meta.env.PORT
const serverUrl = import.meta.env.VITE_SERVER_URL as string || "http://localhost:8080"

const Signup = () => {
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm<SignupInput>({
        resolver: zodResolver(signupSchema)
    })
    const onSubmit: SubmitHandler<SignupInput> = async (data) => {
        const username = data.username
        const password = data.password

        try {
            const response = await axios.post(`${serverUrl}/api/v1/signup`, {
                username,
                password
            })

            navigate('/login')

        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                console.error(error.response.data.message);
            } else {
                console.error('An error occurred:', error);
            }
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <div className="w-full max-w-md p-8 space-y-6 bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-gray-200/20">
                <div className="text-center space-y-2">
                    <h2 className="text-3xl font-bold">Create Account</h2>
                    <p className="text-gray-500">Join Keepio today</p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className="space-y-2">
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                            Username
                        </label>
                        <input
                            {...register("username")}
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-lavender-200 focus:border-transparent transition-all duration-200"
                            placeholder="Enter your username"
                        />
                        {errors.username &&
                            <span className="text-red-500 text-sm">{errors.username.message}</span>
                        }
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            {...register("password")}
                            type="password"
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-lavender-200 focus:border-transparent transition-all duration-200"
                            placeholder="Enter your password"
                        />
                        {errors.password &&
                            <span className="text-red-500 text-sm">{errors.password.message}</span>
                        }
                        <ul className="text-xs text-gray-500 list-disc list-inside space-y-1 mt-2">
                            <li>Must be 8-20 characters long</li>
                            <li>Must contain at least one uppercase letter</li>
                            <li>Must contain at least one lowercase letter</li>
                            <li>Must contain at least one number</li>
                            <li>Must contain at least one special character (!@#$%^&*(),.?":{ }|&lt;&gt;)</li>
                        </ul>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                            Confirm Password
                        </label>
                        <input
                            {...register("confirmPassword")}
                            type="password"
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-lavender-200 focus:border-transparent transition-all duration-200"
                            placeholder="Confirm your password"
                        />
                        {errors.confirmPassword &&
                            <span className="text-red-500 text-sm">{errors.confirmPassword.message}</span>
                        }
                    </div>

                    <Button
                        variant="normal"
                        type="submit"
                        className="w-full py-2.5"
                    >
                        Sign Up
                    </Button>
                </form>

                <p className="text-center text-sm text-gray-500">
                    Already have an account?{' '}
                    <a href="/login" className="text-lavender-200 hover:underline font-medium">
                        Sign in
                    </a>
                </p>
            </div>
        </div>
    )
}

export default Signup