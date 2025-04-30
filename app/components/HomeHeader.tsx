"use client"

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function HomeHeader() {
    const pathname = usePathname();

    return (
        <div className="w-full mx-auto border-b border-[#30305D]">
            <ul className="w-[95%] mx-auto flex items-center justify-between gap-3">

                {/* links  here */}
                <li className={`flex-1 text-center py-3  ${pathname === "/" ? "border-white border-b" : ""}`}>
                    <Link href="/">Posts</Link>
                </li>
                <li className={`flex-1 text-center py-3  ${pathname.startsWith("/users") ? "border-white border-b" : ""}`}>
                    <Link href="/users">Users</Link>
                </li>
                <li className={`flex-1 text-center py-3  ${pathname.startsWith("/communities") ? "border-white border-b" : ""}`}>
                    <Link href="/communities">Communities</Link>
                </li>
            </ul>
        </div>
    )
}
