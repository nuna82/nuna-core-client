"use client"

// icons
import { Hash, Plus, Search } from "lucide-react";

// next
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
    // pathname 
    const pathname = usePathname();

    return (
        <header className="w-full sticky top-0 py-5 bg-[#05050D]/80 backdrop-blur-lg ">
            
            <div className="w-[95%] flex items-center justify-between mx-auto gap-3">
                {/* Left icon */}
                <Hash className="cursor-pointer text-white" />

                {/* Search input */}
                <label className="flex-1 flex items-center py-3 bg-[#1B1B2D] rounded-lg pr-3">
                    <Search className="mx-3 text-gray-400" />
                    <input
                        className="flex-1 bg-transparent outline-none text-white placeholder:text-gray-400"
                        placeholder="Search something"
                        type="text"
                    />
                </label>

                {/* plus iconn */}
                <Link
                    href={pathname !== "/create" ? "/create" : "/"}
                    title="Add post"
                    className="bg-[#0C8CE9] w-[45px] h-[45px] cursor-pointer hover:opacity-90 rounded-lg flex items-center justify-center"
                >
                    <Plus
                        className={`transition-transform duration-200 ease-in-out text-white ${pathname !== "/create" ? "rotate-0" : "rotate-45"
                            }`}
                    />
                </Link>
            </div>

        </header>
    );
}
