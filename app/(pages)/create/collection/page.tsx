
// lucide icons 
import { SquarePen, ImagePlus } from "lucide-react";

export default function Collection() {
    return (
        <div className="w-[95%] mx-auto flex flex-col py-3 gap-3">
            <p className="text-2xl font-bold">New collection</p>

            {/* form  */}
            <form className="flex flex-col gap-5">

                {/* post title  */}
                <label className="space-y-1">
                    <p className="text-[#8989E4] cursor-pointer">Collection title*</p>
                    <input className="w-full bg-[#1B1B2D] p-3 rounded" placeholder="something cool" type="text"  required/>
                </label>

                {/* description */}
                <label className="space-y-1">
                    <p className="text-[#8989E4] cursor-pointer">Collection description (optional)</p>
                    <textarea placeholder="cool description" className="bg-[#1B1B2D] w-full min-h-[100px] max-h-[150px] rounded p-3"></textarea>
                </label>

                <label className="space-y-1">
                    <p className="text-[#8989E4] cursor-pointer">Banner (optional)</p>
                    <div className="w-full h-[150px] bg-[#1B1B2D] rounded text-[#8989E4] flex items-center justify-center flex-col gap-3 cursor-pointer select-none">
                        <ImagePlus className="scale-200" />
                        <p>Upload or drop image here</p>
                    </div>
                    <input className="hidden" type="file" />
                </label>

                {/* btn  */}
                <button className="w-full max-w-[300px] flex items-center justify-center bg-[#0C8CE9] py-3 rounded-lg hover:opacity-90 cursor-pointer gap-3 mx-auto">
                    <SquarePen />
                    add new post
                </button>

            </form>
        </div>
    )
}