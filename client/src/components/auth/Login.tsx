import { useForm, SubmitHandler } from 'react-hook-form'
import Button from '../../ui/Button';

interface Inputs {
    username: string;
    password: string;
}

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <div className="w-full max-w-md p-8 space-y-6 bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-gray-200/20">
                <div className="text-center space-y-2">
                    <h2 className="text-3xl font-bold">Welcome Back</h2>
                    <p className="text-gray-500">Sign in to your account</p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className="space-y-2">
                        <label
                            htmlFor="username"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Username
                        </label>
                        <input
                            {...register("username", { required: true })}
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-lavender-200 focus:border-transparent transition-all duration-200"
                            placeholder="Enter your username"
                        />
                        {errors.username &&
                            <span className="text-red-500 text-sm">Username is required</span>
                        }
                    </div>

                    <div className="space-y-2">
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Password
                        </label>
                        <input
                            {...register("password", { required: true })}
                            type="password"
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-lavender-200 focus:border-transparent transition-all duration-200"
                            placeholder="Enter your password"
                        />
                        {errors.password &&
                            <span className="text-red-500 text-sm">Password is required</span>
                        }
                    </div>

                    <div className="flex items-center justify-between text-sm">
                        <a href="/forgot-password" className=" text-gray-500 hover:underline">
                            Forgot password?
                        </a>
                    </div>

                    <Button
                        variant="normal"
                        type="submit"
                        className="w-full py-2.5"
                    >
                        Sign In
                    </Button>
                </form>

                <p className="text-center text-sm text-gray-500">
                    Don't have an account?{' '}
                    <a href="/signup" className="text-black hover:underline font-medium">
                        Sign Up
                    </a>
                </p>
            </div>
        </div>
    )
}

export default Login