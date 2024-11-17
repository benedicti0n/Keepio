import React from 'react'
import { cn } from '../utils/cn'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'normal' | 'danger' | 'success' | 'passive'
}

const Button = ({
    children,
    variant = 'normal',
    className,
    ...props
}: ButtonProps) => {
    return (
        <button
            className={cn(
                'px-4 py-2 rounded-md font-medium transition-colors',
                'focus:outline-none focus:ring-2 focus:ring-offset-2',
                variant === 'normal' && 'bg-black text-white hover:bg-black/90 focus:ring-black',
                variant === 'passive' && 'bg-white text-black border border-gray-200 hover:bg-gray-100 focus:ring-gray-200',
                variant === 'success' && 'bg-green-400 text-white hover:bg-green-600 focus:ring-green-600',
                variant === 'danger' && 'bg-red-400 text-white hover:bg-red-600 focus:ring-red-600',
                className
            )}
            {...props}
        >
            {children}
        </button>
    )
}

export default Button