
"use client"
import { useState } from "react";

// router 
import Link from "next/link";

// lucide icons 
import { X } from "lucide-react";


export default function ReadOur() {
    const [isHidden, setIsHidden] = useState(true);

    // close btn clikced 
    const handleClose = () => {
        setIsHidden(!isHidden);
    }

    return (

        <div >
            {
                isHidden && <header className="text-center  bg-[#1B1B2D] flex items-center justify-between px-2 py-1">
                    <div></div>
                    <Link className="underline opacity-80" href={"/terms"}>read our philosophy creating this platform</Link>
                    {/* close icom  */}
                    <X onClick={handleClose} className="cursor-pointer" />
                </header>
            }
        </div>

    )
}