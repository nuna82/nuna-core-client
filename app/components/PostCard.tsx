import Image, { StaticImageData } from "next/image";
import { ArrowBigDown, ArrowBigUp, MessageSquare } from "lucide-react";

interface PostCardProps {
  image: string | StaticImageData;
  name: string;
  likes: number;
  comments: number;
}

const PostCard = ({ image, name, likes, comments }: PostCardProps) => {
  return (
    <div className="text-white p-3">
      <div className="py-3 border-b border-gray-700">
        <div className="flex items-center gap-2 mb-4">
          <Image
            src={image}
            alt="Post image"
            className="w-7 h-7 rounded-full"
          />
          <span className="text-md font-medium">n#{name}</span>
        </div>
        <p>
          title of the post that was posted to community by ordinary user who
          followed to this community by changing select in post page
        </p>
      </div>

      <Image
        className="w-[595px] h-[296px] object-cover rounded-lg"
        src={image}
        width={595}
        height={296}
        alt={`${name} post`}
      />

      <div className="flex items-center justify-between px-4 py-3 border-t border-gray-700 text-sm text-gray-300">
        <button className="flex items-center gap-2 hover:text-white">
          <MessageSquare size={28} />
          <span>Comments</span>
        </button>

        <div className="flex items-center gap-2">
          <button className="flex items-center">
            <ArrowBigUp size={28} />
            {likes}
          </button>

          <button className="flex items-center">
            <ArrowBigDown size={28} />
            {comments}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
