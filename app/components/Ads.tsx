import { X } from "lucide-react"

export default function Ads() {
    return (
        <div className="px-3 space-y-3">

            {/* close btn  */}
            <div className="flex items-center justify-between">
                <p className="text-lg font-bold">ads</p>
                {/* close icon */}
                <X className="cursor-pointer" />
            </div>

            {/* ads  video  */}
            <div className="w-full bg-[#1B1B2D] flex items-center justify-center h-[150px] rounded-lg">
                <p className="text-[#8989E4] text-lg">google ads</p>
            </div>
        </div>
    )
}