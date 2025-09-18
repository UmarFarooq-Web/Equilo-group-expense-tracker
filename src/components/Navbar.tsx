"use client"
import { CircleEqual } from "lucide-react"
import Button from "./Button"
import { useSession, signOut } from "next-auth/react"
import { link } from "fs"
import { usePathname } from "next/navigation";

export default function Navbar() {


    const { data: session, status } = useSession()
    const homelinks = [
        { name: "How it works", link: "work" },
        { name: "Security", link: "security" },
        { name: "Testimonials", link: "testimonials" },
        { name: "FAQ", link: "faq" },
    ]

    const userLinks = [
        { name: "Dashboard", link: "/dashboard" },
        { name: "Friends", link: "/friends" },
    ]


    const pathname = usePathname()

    const isHomePage = pathname==="/"

    return (
        <div className="dark:bg-Pgray-500 dark:text-white flex justify-between px-2 md:px-4 lg:px-7 py-3 items-center border-b border-stone-800" >
            <a href="/">
                <div className="flex gap-1 text-[20px] font-bold items-center">
                    <CircleEqual size={30} />
                    <span>Equilo</span>
                </div>
            </a>
            <ul className="gap-5 md:gap-7 text-[15px] hidden sm:flex">
                {
                isHomePage?homelinks.map((e, i) => <a key={i} href={`#${e.link}`} className="cursor-pointer">{e.name}</a>)
                :
                userLinks.map((e, i) => <a key={i} href={`${e.link}`} className="cursor-pointer">{e.name}</a>)
                }
            </ul>
            <div className="min-w-[143.3px]">
                {
                     status === "loading"? <div></div> : session ? 
                        <div className="flex gap-2 sm:gap-4" >
                            <a href="/dashboard">Dashboard</a>
                            <button onClick={() => signOut()} className="cursor-pointer" >Logout</button>
                        </div>
                        :
                        <Button ExtraClasses="px-5 py-2 text-[14px]" />
                }
            </div>
        </div>

    )
}