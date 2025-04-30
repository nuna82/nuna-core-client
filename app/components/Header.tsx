
// assets or icons 
import { Hash, Plus, Search } from "lucide-react";



export default function Header() {
    return (
        <header className="w-full  sticky top-0 py-5 bg-[#05050D]/80 backdrop-blur-lg">
            <div className="w-[95%] flex items-center justify-between mx-auto gap-3">
                <Hash className="cursor-pointer" />

                <label className="flex-1 flex items-center py-3 bg-[#1B1B2D] rounded-lg pr-3">
                    <Search className="mx-3" />
                    <input className="flex-1" placeholder="search something" type="text" />
                </label>
                <button title="add post" className="bg-[#0C8CE9] w-[45px] h-[45px] flex items-center justify-center rounded-lg cursor-pointer hover:opacity-90">
                    <Plus />
                </button>
            </div>
        </header>
    )
}