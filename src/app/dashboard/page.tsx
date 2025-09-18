import Activities from "@/components/ActivitiesPanel";
import Navbar from "@/components/Navbar";
import { Plus, UserPlus } from "lucide-react";

export default function Deshboard(){
    return (
        <div>
            <Navbar/>
            <div className="px-2 py-7  md:p-10 flex gap-6 flex-col md:flex-row" >
                <div className="md:min-w-[370px]">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        <div className="px-4 py-2.5 border border-gray-500 rounded-xl dark:bg-Pgray-400 min-w-[50px] sm:min-w-[170px]">
                            <div>You owe</div>
                            <div className="font-semibold text-[27px] text-red-700">$102.50</div>
                        </div>

                        <div className="px-4 py-2.5 border border-gray-500 rounded-xl dark:bg-Pgray-400 min-w-[50px] sm:min-w-[170px]">
                            <div>You're owed</div>
                            <div className="font-semibold text-[27px] text-green-700">$102.50</div>
                        </div>
                        <div className="px-4 py-2.5 border border-gray-500 rounded-xl dark:bg-Pgray-400 min-w-[50px] sm:min-w-[170px]">
                            <div>Net balance</div>
                            <div className="font-semibold text-[27px] ">$102.50</div>
                        </div>
                        <div className="px-4 py-2.5 border border-gray-500 rounded-xl dark:bg-Pgray-400 min-w-[50px] sm:min-w-[170px]">
                            <div>This month</div>
                            <div className="font-semibold text-[27px]">$102.50</div>
                        </div>
                    </div>

                    <div>
                        <button className="flex w-full py-2 dark:bg-Pgray-400 justify-center items-center rounded mt-4.5 gap-1 font-semibold hover:dark:bg-Pgray-300 transition duration-100 cursor-pointer " ><Plus/>Create Bill</button>
                        <button className="flex w-full py-2 justify-center items-center rounded mt-2.5 gap-1 font-semibold  transition duration-100 cursor-pointer border border-Pgray-300 hover:dark:bg-Pgray-400" ><UserPlus /> Add Friend </button>
                    </div>


                </div>

                <div className="w-full">
                    <h1 className="text-2xl font-bold">Recent Activity</h1>
                    <Activities/>
                </div>
            </div>
        </div>
    )
}