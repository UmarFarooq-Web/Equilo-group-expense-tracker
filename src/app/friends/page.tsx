'use client'

import Navbar from "@/components/Navbar";
import { Search, X } from "lucide-react";
import { useState } from "react";


export default function Friends() {
    const [searchText , setSearchText] = useState("");
    const [isActive , setIsActive] = useState(false);
    return (
        <div className="h-screen flex flex-col" >
            <Navbar />
            <div className="flex flex-col items-center bg-Pgray-500 grow pt-8 sm:pt-10 " >
                <div className=" min-w-[400px] w-full max-w-[850px] ">
                    <div className="flex justify-between">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">Friends</h1>
                        <button>Addfriend</button>
                    </div>
                    
                    <div className="mt-10 border border-gray-500 rounded-t-md p-6 " >
                        <div className={`flex border  bg-Pgray-400 rounded px-2 py-2 ${isActive?"outline-2 border-blue-500":"border-gray-500"} outline-blue-500 outline-offset-1 gap-1.5`} >
                            <Search/>
                            <input placeholder="Search friends" onChange={(e)=>setSearchText(e.target.value)} value={searchText} className="w-full grow outline-none" onFocus={()=>setIsActive(true)} onBlur={()=>setIsActive(false)} />
                            {searchText.length>0 && <button onClick={()=>setSearchText("")} ><X/></button>}
                        </div>  
                    </div>
                    <Friends/>



                </div>
            </div>
        </div>
    )
}