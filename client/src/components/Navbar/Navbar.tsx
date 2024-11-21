import { useNavigate } from 'react-router-dom'
import Button from '../../ui/Button'

const Navbar = () => {
    const navigate = useNavigate()
    const handleSignIn = () => {
        navigate("/signup")
    }
    const handleLogin = () => {
        navigate("/login")
    }
    return (
        <div className='w-full px-4 py-2 flex justify-between items-center backdrop-blur-md bg-white/30 border-b border-gray-300'>
            <div className='flex items-center gap-2'>
                <img src="/logo.png" alt="Keepio logo" className='h-8 w-8' />
                <h1 className='font-semibold text-xl'>Keepio</h1>
            </div>
            <div>
                <Button variant='normal' onClick={handleSignIn} className='mr-2'>
                    SignIn
                </Button>
                <Button variant='normal' onClick={handleLogin} className='ml-2'>
                    Login
                </Button>
            </div>
        </div>
    )
}

export default Navbar