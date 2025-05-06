// data
import { posts } from "@/app/data/data";

import PostCard from "@/app/reuseable/PostCard";

export default function Home() {
  return (
    <ul className="w-full mx-auto">
      {posts.map((post, id) => {
        return (
          <li key={id} className="w-full">
            <PostCard
              PostName={post.postName}
              UserImage={post.userImage}
              descr={post.descr}
              PostImage={post.image}
              SupportNumber={post.support}
            />
          </li>
        );
      })}
    </ul>
  );
}
