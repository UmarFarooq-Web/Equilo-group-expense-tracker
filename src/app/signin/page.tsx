"use client"
import Button from "@/components/Button";
import Navbar from "@/components/Navbar";
import { signIn } from "next-auth/react";

export default function SignIn(){
    return (
        <div className="flex flex-col h-screen " >
            <Navbar/>
            <div className="flex justify-center items-center  grow px-2">
                <div className="min-w-[330px] w-full max-w-[450px] dark:border-Pgray-400 dark:bg-Pgray-400 rounded-xl py-7 px-4  md:px-6 flex flex-col items-center" >
                    <h1 className=" text-3xl md:text-4xl font-bold">Welcome Back</h1>
                    <p className="dark:text-stone-500" >Log in to your account to continue.</p>
                    <div className="w-full flex flex-col gap-2 mt-6" >
                        <label>Email:</label>
                        <input type="text" className="dark:bg-Pgray-300 p-2 rounded" placeholder="you@example.com"  />
                    </div>
                    <div className="w-full flex flex-col gap-2 mt-4" >
                        <label>Password: </label>
                        <input type="password" className="dark:bg-Pgray-300 p-2 rounded" placeholder="you@example.com"  />
                    </div>
                    <button className="w-full bg-white text-black py-2 mt-7 rounded cursor-pointer font-semibold " >Login</button>
                    <div className=" w-full dark:text-white mt-4 flex items-center gap-2" >
                        <hr color="white" className="w-full" />
                        <span className="grow text-nowrap" >OR CONTINUE WITH</span>
                        <hr color="white" className="w-full"  />
                    </div>
                    <button onClick={()=>signIn("google")} className="w-full dark:bg-white dark:text-black py-2 mt-7 rounded cursor-pointer font-semibold " >Google</button>
                </div>
            </div>
        </div>
    )
}