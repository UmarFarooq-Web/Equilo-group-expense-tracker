import { CircleEqual } from "lucide-react";

export default function Footer(){
    return(
        <footer className="dark:bg-Pblack border-t border-gray-600 flex gap-1 justify-center py-5" >
            <CircleEqual size={30} />
            <span>Equilo</span>
            <span>© 2024 Equilo. All rights reserved.</span>
        </footer>
    )
}