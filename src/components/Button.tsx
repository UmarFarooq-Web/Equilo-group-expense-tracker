

export default function Button({ExtraClasses}:{ExtraClasses:string}) {
    return (
        <button className={`${ExtraClasses}  rounded-full dark:bg-Pgray-400 hover:dark:bg-Pgray-300 transition-colors duration-100 font-semibold cursor-pointer`} >Sign up</button>

    )
}