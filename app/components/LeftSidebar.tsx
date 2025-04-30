
// next img 
import Image from "next/image";

// assets 
import ProfileImage from "../icons/sidebar/profile.png";

// icons 
import { Menu } from "lucide-react";

// next 
import Link from "next/link";

// topics 
import { topics } from "../data/data";

// components 
import Ads from "./Ads";

export default function LeftSidebar() {
    return (
        <aside className="w-full space-y-5 sticky top-5">

            {/* profile informations */}
            <Link href={"/profile"} className="flex items-center gap-3 hover:bg-[#1B1B2D] py-1 rounded-r-lg cursor-pointer px-3">
                {/* profile image  */}
                <Image className="w-[48px] h-[48px] rounded-full object-cover object-center" src={ProfileImage} alt="profile image" />

                <div className="flex-1">
                    {/* name  */}
                    <p className="truncate font-bold">Muhammadali Jamolov</p>

                    {/* username  */}
                    <p className="text-sm text-gray-400">mukhamadali.001</p>
                </div>
            </Link>

            {/* topics  */}
            <div className="px-3 space-y-2">
                <p className="text-[20px] font-bold">popular topics today</p>

                {/* topics map here  */}
                <div className="flex flex-wrap gap-2">
                    {topics.map((topic, id) => (
                        <span key={id} title={topic} className="py-0.5 px-3 bg-[#1B1B2D] hover:bg-[#282849] rounded-3xl cursor-pointer">{`#${topic}`}</span>
                    ))}
                </div>
            </div>

            {/* ADS  */}
            <Ads/>

        </aside>
    )
}