"use client";
import Image from "next/image";

// icons
import bannerbg from "@/app/icons/banner-bg.png";
import userprph from "@/app/icons/user-pr-ph.jpg";
import { ArrowBigUp, Link, MessageSquare } from "lucide-react";
import { usePathname } from "next/navigation";
import PostCard from "@/app/components/PostCard";

// components 
import HomeHeader from "@/app/reuseable/HomeHeader";


const page = () => {
  const pathname = usePathname();
  return (
    <div className="">
      {/* user profile and banner */}

      <section className="relative w-full h-[250px] flex flex-col items-center -z-10">
        {/* Background image */}
        <Image
          src={bannerbg} // replace with your sunset bg
          alt="Background"
          className="w-full h-2/3 object-cover"
        />

        {/* Profile image wrapper */}
        <Image
          src={userprph} // replace with your circle image
          alt="Profile"
          className="w-32 h-32 object-cover z-10 rounded-full border-4 border-transparent absolute bottom-3"
        />
      </section>

      {/* user information */}
      <section className="text-center text-white">
        <h1 className="text-2xl font-bold mb-1">boburov.dev</h1>

        <p className="text-blue-400 text-base mb-1">@boburov.dev</p>

        <p className="text-[#8989E4] text-xs mb-2">
          bio of following channel of user, changed after registration.
        </p>

        <p className="text-sm text-white cursor-pointer hover:underline mb-2">
          more →
        </p>

        <div className="flex justify-center gap-4 text-sm mb-7">
          <span>
            <strong>718</strong>{" "}
            <span className="text-[#8989E4]">· followers</span>
          </span>
          <span>
            <strong>8</strong>{" "}
            <span className="text-[#8989E4]">· following</span>
          </span>
          <span>
            <strong>12</strong> <span className="text-[#8989E4]">· posts</span>
          </span>
        </div>

        <button className="px-20 py-2 bg-[#0C8CE9] hover:bg-blue-500 transition rounded text-white text-sm font-medium mb-4">
          Follow
        </button>
      </section>

      {/* components  */}
      <HomeHeader
        // here is texts of buttons 
        first="Posts"
        second="Communities"
        third="Partnerships"

        // this is for links @Boburov you can change this links, and add pages for this links
        firstLink="/user/@username"
        secondLink="/users"
        thirdLink="/communities" />

      <PostCard name="boburov.dev" image={userprph} likes={718} comments={91} />
    </div>
  );
};

export default page;
