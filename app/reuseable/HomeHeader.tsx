"use client"

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function HomeHeader({ first, second, third, firstLink, secondLink, thirdLink }: { first: string, second: string, third: string, firstLink:string,secondLink:string,thirdLink:string  }) {
    const pathname = usePathname();

    return (
        <div className="w-full mx-auto border-b border-[#30305D]">
            <ul className="w-[95%] mx-auto flex items-center justify-between gap-3">
                {/* links  here */}
                <li className={`flex-1 text-center   ${pathname === (firstLink) ? "border-white border-b" : ""}`}>
                    <Link className="block py-3" href={firstLink}>{first}</Link>
                </li>
                <li className={`flex-1 text-center   ${pathname.startsWith(secondLink) ? "border-white border-b" : ""}`}>
                    <Link className="block py-3" href={secondLink}>{second}</Link>
                </li>
                <li className={`flex-1 text-center   ${pathname.startsWith(thirdLink) ? "border-white border-b" : ""}`}>
                    <Link className="block py-3" href={thirdLink}>{third}</Link>
                </li>
            </ul>
        </div>
    )
}
