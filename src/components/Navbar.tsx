import {CircleEqual} from "lucide-react"
import Button from "./Button"

export default function Navbar() {
    const links = [
        {name:"How it works"},
        {name:"Features"},
        {name:"Security"},
        {name:"Testimonials"},
        {name:"FAQ"},
    ]
    return (
        <div className="dark:bg-Pgray-500 dark:text-white flex justify-between px-2 md:px-4 lg:px-7 py-3 items-center border-b border-stone-800" >
            <div>
                <div className="flex gap-1 text-[20px] font-bold items-center">
                    <CircleEqual size={30} />
                    <span>Equilo</span>
                </div>
            </div>
            <ul className="gap-5 md:gap-7 text-[15px] hidden sm:flex">
                {links.map((e)=><li className="cursor-pointer">{e.name}</li>)}
            </ul>
            <div>
                <Button ExtraClasses="px-5 py-2 text-[14px]" />    
            </div>
        </div>
    )
}