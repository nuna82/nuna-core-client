import Image, { StaticImageData } from "next/image";
import { ArrowBigDown, ArrowBigUp, MessageSquare } from "lucide-react";

interface PostCardProps {
  image:  string | StaticImageData;
  name: string;
  likes: number;
  comments: number;
}

const PostCard = ({ image, name, likes, comments }: PostCardProps) => {
  return (
    <div className="text-white p-3">
      <div className="px-4 py-3 border-b border-gray-700">
        <div className="flex items-center gap-2">
          <Image
            src={image}
            alt="Post image"
            className="w-5 h-5 rounded-full"
          />
          <span className="text-sm text-gray-400">n#{name}</span>
        </div>
        <h2 className="text-lg font-medium mt-1">
          title of the post that was posted to community by ordinary user who
          followed to this community by changing select in post page
        </h2>
      </div>

      <Image
        src={image}
        alt="Post image"
        className="w-full h-72 rounded-xl  object-cover"
      />

      <div className="flex items-center justify-between px-4 py-3 border-t border-gray-700 text-sm text-gray-300">
        <button className="flex items-center gap-2 hover:text-white">
          <MessageSquare size={18} />
          <span>Comments</span>
        </button>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <ArrowBigUp size={18} />
            {likes}
          </div>
          <div className="flex items-center gap-1">
            <ArrowBigDown size={18} />
            {comments}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
