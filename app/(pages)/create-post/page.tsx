
//  antd 
import { Select } from "antd";

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

                <Select className="w-full bg-[#1B1B2D]"
                    options={[
                        { value: 'jack', label: 'Jack' },
                        { value: 'lucy', label: 'Lucy' },
                    ]}
                />
            </form>
        </div>
    )
}