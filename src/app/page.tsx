"use client"
import {
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton,
    useUser
} from '@clerk/nextjs'
import { useRouter } from 'next/navigation';
export default function Home() {
    const { isSignedIn } = useUser();
    const router = useRouter()
    const redirectToDashBoard = () => {
        router.push('/dashboard')
    }
    return (
        <div className="flex flex-col justify-center items-center bg-black min-h-screen">
            <div className="bg-white rounded-sm p-10">
                <h1 className="text-2xl text-black"> welcome to transaction tracker</h1>
                <div className=' p-2 m-2 rounded-md text-center'>
                    <SignedOut>
                        <div className='bg-blue-500 rounded-lg px-4 py-2 text-white'>
                            <SignInButton />
                        </div>
                    </SignedOut>
                    <SignedIn>
                        <div className='flex items-center gap-5 justify-center'>
                            <button
                                className='bg-blue-500 rounded-lg px-4 py-2 text-white'
                                onClick={redirectToDashBoard}
                            >
                                Dashboard
                            </button>
                            <UserButton />
                        </div>

                    </SignedIn>
                </div>
            </div>
        </div>
    );
}
