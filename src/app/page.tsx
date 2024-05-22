"use client"
import {
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
} from '@clerk/nextjs'

export default function Home() {
    return (
        <div className="flex flex-col justify-center items-center bg-black min-h-screen">
            <div className="bg-white rounded-sm p-10">
                <h1 className="text-2xl text-black"> welcome to transition tracker</h1>
                <div className='bg-blue-200 p-2 m-2 rounded-md text-center'>
                    <SignedOut>
                        <SignInButton />
                    </SignedOut>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                </div>
            </div>
        </div>
    );
}
