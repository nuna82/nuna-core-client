// data
import { posts } from "@/app/data/data";

// next
import Link from "next/link";
import Image from "next/image";

// lucide icons
import { MessageSquare, ArrowBigUp } from "lucide-react";
import PostCard from "@/app/reuseable/PostCard";

export default function Home() {
  return (
    <ul className="w-full mx-auto">
      {posts.map((post, id) => {
        return (
          <li key={id} >
            <PostCard PostName={post.postName} UserImage={post.userImage} descr={post.descr} PostImage={post.image}  SupportNumber={post.support} />
          </li>
        );
      })}
    </ul>
  );
}
