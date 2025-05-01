
// data 
import { posts } from ".././././././././././././././.././data/data";

// next 
import Link from "next/link";
import Image from "next/image";

// lucide icons 
import { MessageSquare, ArrowBigUp } from "lucide-react";

export default function Home() {
    return (
        <ul className="w-[95%] mx-auto">
            {posts.map((post, id) => {
                return (
                    <li key={id} className="border-b border-[#30305D] space-y-3 py-3">
                        <Link href={`/${post.postName}`} className="flex  items-center gap-3">
                            <Image className="w-[30px] h-[30px] rounded-full object-cover object-center" src={post.userImage} alt={post.postName} />
                            <p>{post.postName}</p>
                        </Link>

                        {/* descr  */}
                        <p>{post.descr}</p>

                        {/* image */}
                        <Image className="w-[595px] h-[268px] object-cover object-center rounded-lg" src={post.image} alt={post.postName} />

                        {/* support  */}
                        <div className="flex items-center justify-between">

                            {/* comment  */}
                            <div className="flex items-center gap-1 text-[#8989E4] cursor-pointer select-none">
                                <MessageSquare />
                                <p>Comments</p>
                            </div>


                            {/* support number */}
                            <div className="flex items-center gap-1 cursor-pointer select-none">
                                <ArrowBigUp className="text-[#8989E4]" />
                                <span>{post.support}</span>
                            </div>
                        </div>
                    </li>
                );
            })}
        </ul>
    )
}