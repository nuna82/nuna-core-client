
// assets or icons 
import { Hash, Plus , Search} from "lucide-react";



export default function Header() {
    return (
        <header className="w-[95%] flex items-center justify-between mx-auto gap-3">
            <Hash className="cursor-pointer" />

            <label className="flex-1 flex items-center py-3 bg-[#1B1B2D] rounded-lg">
                <Search className="mx-3"/>
                <input placeholder="search something" type="text" />
            </label>
            <button title="add post" className="bg-[#0C8CE9] w-[45px] h-[45px] flex items-center justify-center rounded-lg cursor-pointer hover:opacity-90">
                <Plus />
            </button>
        </header>
    )
}