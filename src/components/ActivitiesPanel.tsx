import Image from "next/image"
import pic1 from "../assets/pic1.png"
import pic2 from "../assets/pic2.png"
import pic3 from "../assets/pic3.png"

export default function Activities() {
    const data = [
        { pic: pic1, Title: "Dinner at The Italian Place", des: "You paid $20 to Alex for dinner", amount:"$20", time:"2 days ago" },
        { pic: pic2, Title: "Dinner at The Italian Place", des: "You paid $20 to Alex for dinner", amount:"$20", time:"2 days ago" },
        { pic: pic3, Title: "Dinner at The Italian Place", des: "You paid $20 to Alex for dinner", amount:"$20", time:"2 days ago" },
    ]
    return (
        <section className="w-full grow gap-8 flex flex-col mt-9">
            {data.map((e) => <div className="flex justify-between">
                <div className="flex items-center gap-2">
                    <Image src={e.pic} height={55} className="rounded-full" alt="Profile Pic" />
                    <div>
                        <div className="font-[900]" >{e.Title}</div>
                        <div>{e.des}</div>
                    </div>
                </div>
                <div className="flex justify-end items-end flex-col">
                    <div className="text-end">{e.amount}</div>
                    <div className="text-end">{e.time}</div>
                </div>
            </div>)}
        </section>
    )
}