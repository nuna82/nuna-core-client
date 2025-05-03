
// next
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

// lucide icons
import { MessageSquare, ArrowBigUp } from "lucide-react";

export default function Home({ PostName, UserImage,descr, PostImage,SupportNumber }: { PostName: string , UserImage: string | StaticImageData, descr: string, PostImage: string | StaticImageData, SupportNumber:number}) {
    return (
        <div className="border-b border-[#30305D] space-y-3 py-3">

            {/* User profile pic */}
            <Link
                href={`/${PostName}`}
                className="flex  items-center gap-3"
            >
                <Image
                    width={30}
                    height={30}
                    className="w-[30px] h-[30px] rounded-full object-cover object-center"
                    src={UserImage}
                    alt={PostName}
                />
                <p>{"postName"}</p>
            </Link>

            {/* descr  */}
            <p>{descr}</p>

            {/* image */}
            <Image
                className="w-[595px] h-[268px] object-cover object-center rounded-lg"
                src={PostImage}
                alt={PostName}
            />

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
                    <span>{SupportNumber}</span>
                </div>
            </div>
        </div>
    );
}
