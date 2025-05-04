
// shadcn select ui 
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/app/reuseable/ui/select";

// switch toogle 
import { Switch } from "@/app/reuseable/ui/switch";



export default function CreatePost() {
    return (
        <div className="min-h-screen w-[95%] mx-auto">
            <p className="text-2xl font-bold">New post</p>

            {/* form  */}
            <form>

                {/* post title  */}
                <label>
                    something cool
                    <input type="text" />
                </label>

                {/* description */}
                <label>
                    Description (optional)
                    <textarea></textarea>
                </label>

                <label>
                    image (optional)
                    <div>

                    </div>
                    <input type="file" />
                </label>

                {/* select ui  */}
                <label>
                    <p>collection (optional)</p>
                    <Select >
                        <SelectTrigger className="w-full bg-[#1B1B2D] py-5 border border-none">
                            <SelectValue placeholder="Not in collection" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#1B1B2D] text-white border-none">
                            <SelectItem value="light">Light</SelectItem>
                            <SelectItem value="dark">Dark</SelectItem>
                            <SelectItem value="system">System</SelectItem>
                        </SelectContent>
                    </Select>
                </label>

                {/* toggle  */}
                <label>
                    <p>Allow all comments Comments</p>
                    <Switch className="bg-black" />
                </label>

            </form>
        </div>
    )
}