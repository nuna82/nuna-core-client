"use client";
import Image from "next/image";

// icons
import bannerbg from "@/app/icons/banner-bg.png";
import userprph from "@/app/icons/user-pr-ph.jpg";
import { ArrowBigUp, Link, MessageSquare } from "lucide-react";
import { usePathname } from "next/navigation";
import PostCard from "@/app/components/PostCard";

const page = () => {
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
          className="w-32 h-32 object-cover z-10 rounded-full border-4 border-[#05050D] absolute bottom-5 "
        />
      </section>

      {/* user information */}
      <section className="text-center text-white">
        <h2 className="font-bold text-2xl first-letter:uppercase">
          boburov.dev
        </h2>

        <p className="text-base font-[roboregular] text-blue-400 ">
          @boburov.dev
        </p>

        <p className="text-[text-xs font-[robolight] text-[#8989E4] mb-4 text-justify px-3">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </p>

        <p className="text-sm hover:underline text-white cursor-pointer mb-2">
          more →
        </p>

        <div className="flex justify-center gap-4 mb-7 text-sm">
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

        <button className="text-white text-sm font-medium px-20 py-2 transition rounded mb-4   bg-[#0C8CE9] hover:bg-blue-500 ">
          Follow
        </button>
      </section>

      <section className="flex items-center justify-between px-6 border-b-2 border-[#30305D]">
        <p className="w-1/3 pb-3 text-center border-b-2 border-transparent hover:border-white">
          Posts
        </p>
        <p className="w-1/3 pb-3 text-center border-b-2 border-transparent hover:border-white">
          Communities
        </p>
        <p className="w-1/3 pb-3 text-center border-b-2 border-transparent hover:border-white">
          Partnerships
        </p>
      </section>
      <PostCard name="boburov.dev" image={userprph} likes={718} comments={91} />
    </div>
  );
};

export default page;
