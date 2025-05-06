// next
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

// lucide icons
import { MessageSquare, ArrowBigUp, EllipsisVertical } from "lucide-react";

export default function Home({
  PostName,
  UserImage,
  descr,
  PostImage,
  SupportNumber,
}: {
  PostName: string;
  UserImage: string | StaticImageData;
  descr: string;
  PostImage: string | StaticImageData;
  SupportNumber: number;
}) {
  return (
    <div className="border-b border-[#30305D] flex justify-center">
      <div className="w-[95%] space-y-3 py-3">
        <Link href={`/${PostName}`} className="flex  items-center gap-3">
          <Image
            width={30}
            height={30}
            className="w-[30px] h-[30px] rounded-full object-cover object-center"
            src={UserImage}
            alt={PostName}
          />
          <p>{PostName}</p>
        </Link>
        {/* descr  */}
        <p className=" text-lg font-semibold">{descr}</p>
        {/* image */}
        {PostImage && (
          <div className="aspect-video overflow-hidden rounded-lg relative">
            <Image
              className="w-full h-full object-cover"
              src={PostImage}
              alt={PostName}
            />
            <div className="w-full h-full bg-black/50 absolute top-0 left-0 backdrop-blur-lg flex justify-center items-center">
              <Image className="h-full w-auto" src={PostImage} alt={PostName} />
            </div>
          </div>
        )}
        {/* support  */}
        <div className="flex items-center justify-between py-2">
          {/* comment  */}
          <div className="flex items-center gap-1 text-[#8989E4] cursor-pointer select-none">
            <MessageSquare />
            <p>Comments</p>
          </div>

          {/* support number */}
          <div className="flex gap-5">
            <div className="flex items-center gap-1 cursor-pointer select-none">
              <ArrowBigUp className="text-[#8989E4]" />
              <span>{SupportNumber}</span>
            </div>
            <button className="cursor-pointer">
              <EllipsisVertical />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
