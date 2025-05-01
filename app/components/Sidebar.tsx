"use client"

// components and libraryies
import Image from "next/image";
import Link from "next/link";

// navigation
import { usePathname } from "next/navigation";

// img and icons
import Logo from "../icons/logo.svg";
import home_ic from "../icons/home-ic.svg";
import search_ic from "../icons/search-ic.svg";
import notification from "../icons/notification-ic.svg";
import chat_ic from "../icons/chat-ic.svg";
import profile_ic from "../icons/profile-ic.svg";
import setting_ic from "../icons/settings-ic.svg";
import author_room from "../icons/author-room-ic.svg";
import add_post_ic from "../icons/add-post-ic.svg";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="space-y-5 sticky top-5">
      {/* logo  */}
      <Link href={"/"} className="flex">
        <Image
          src={Logo}
          width={48}
          height={48}
          alt="nuna logo"
        />
      </Link>

      {/* Sidebar links  */}
      <ul className="space-y-2">
        <li className={`hover:bg-[#1B1B2D] p-2 rounded-l-lg cursor-pointer ${pathname === "/" && "bg-[#1B1B2D]"}`}>
          <Link href="/" className="flex items-center gap-5">
            <Image src={home_ic} width={30} height={30} alt="home page" />
            <p className="font-bold text-lg">Home</p>
          </Link>
        </li>

        <li className="hover:bg-[#1B1B2D] p-2 rounded-l-lg cursor-pointer">
          <Link href="/" className="flex items-center gap-5">
            <Image src={search_ic} width={30} height={30} alt="home page" />
            <p className="font-bold text-lg">Search page</p>
          </Link>
        </li>

        <li className="hover:bg-[#1B1B2D] p-2 rounded-l-lg">
          <Link href="/" className="flex items-center gap-5">
            <Image src={notification} width={30} height={30} alt="home page" />
            <p className="font-bold text-lg">Notifications</p>
          </Link>
        </li>

        <li className="hover:bg-[#1B1B2D] p-2 rounded-l-lg cursor-pointer">
          <Link href="/user/@username" className="flex items-center gap-5">
            <Image src={profile_ic} width={30} height={30} alt="home page" />
            <p className="font-bold text-lg">My profile</p>
          </Link>
        </li>

        <li className="hover:bg-[#1B1B2D] p-2 rounded-l-lg cursor-pointer">
          <Link href="/" className="flex items-center gap-5">
            <Image src={chat_ic} width={30} height={30} alt="home page" />
            <p className="font-bold text-lg">Chats</p>
          </Link>
        </li>

        <li className="hover:bg-[#1B1B2D] p-2 rounded-l-lg cursor-pointer">
          <Link href="/" className="flex items-center gap-5">
            <Image src={setting_ic} width={30} height={30} alt="home page" />
            <p className="font-bold text-lg">Settings</p>
          </Link>
        </li>

        <li className="hover:bg-[#1B1B2D] p-2 rounded-l-lg cursor-pointer">
          <Link href="/" className="flex items-center gap-5">
            <Image src={author_room} width={30} height={30} alt="home page" />
            <p className="font-bold text-lg">Authors’ room</p>
          </Link>
        </li>
      </ul>

      <Link href={"/create-post"}>
        <button className="w-[95%] flex items-center justify-center bg-[#0C8CE9] py-3 rounded-lg hover:opacity-90 cursor-pointer gap-3">
          <Image src={add_post_ic} width={24} height={24} alt="note icon" />
          add new post
        </button>
      </Link>
    </aside>
  );
};

export default Sidebar;