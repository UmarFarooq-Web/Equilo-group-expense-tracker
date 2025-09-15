import Button from "./Button";


export default function HeroSection() {

    return (
        <section className="dark:bg-Pgray-500 dark:text-white flex flex-col justify-center items-center min-h-[400px] md:min-h-[600px]">
            <div className="flex justify-center items-center flex-col w-full max-w-[900px] gap-2.5" >
                <h1 className="font-bold text-5xl md:text-7xl text-center" >Split bills, not friendships.</h1>
                <p className="text-center">Equilo makes it easy to share expenses with friends, roommates, and travel companions. Track balances, settle up, and keep everyone on the same page.</p>
                <div className="mt-2.5" >
                    <Button ExtraClasses="px-7 py-3 text-[15px]" />
                </div>
            </div>
        </section>
    )
}