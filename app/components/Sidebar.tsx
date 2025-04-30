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
<<<<<<< HEAD
  return (
    <aside className="w-[310px] border-[#1B1B2D] border-r-2 h-screen py-4 space-y-6 pl-4">
      {/* logo  */}
      <Link href='/' className="mb-5 inline-block">
        <Image src={Logo} width={88} height={40} alt="nuna logo" />
      </Link>
=======
  const pathname = usePathname();
>>>>>>> 3ef5cce377cfdd16ebb29bb556c62d8409f2cd78

  return (
    <aside className="space-y-5">
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
        <li className={`hover:bg-[#1B1B2D] p-2 cursor-pointer ${pathname === "/" && "bg-[#1B1B2D]"}`}>
          <Link href="/" className="flex items-center gap-5">
            <Image src={home_ic} width={30} height={30} alt="home page" />
            <p className="font-bold text-lg">Home</p>
          </Link>
        </li>

        <li className="hover:bg-[#1B1B2D] p-2 cursor-pointer">
          <Link href="/" className="flex items-center gap-5">
            <Image src={search_ic} width={30} height={30} alt="home page" />
            <p className="font-bold text-lg">Search page</p>
          </Link>
        </li>

        <li className="hover:bg-[#1B1B2D] p-2">
          <Link href="/" className="flex items-center gap-5">
            <Image src={notification} width={30} height={30} alt="home page" />
            <p className="font-bold text-lg">Notifications</p>
          </Link>
        </li>
<<<<<<< HEAD
        <li className="hover:bg-[#1B1B2D] rounded-md py-2 px-2">
          <Link
            href="/user/BUYERGA_APIDAN_UERNAME_KELISHI_KERAK"
            className="flex items-center gap-2"
          >
            <Image src={profile_ic} width={24} height={24} alt="home page" />
            <p className="text-base">My profile</p>
=======

        <li className="hover:bg-[#1B1B2D] p-2 cursor-pointer">
          <Link href="/" className="flex items-center gap-5">
            <Image src={profile_ic} width={30} height={30} alt="home page" />
            <p className="font-bold text-lg">My profile</p>
>>>>>>> 3ef5cce377cfdd16ebb29bb556c62d8409f2cd78
          </Link>
        </li>

        <li className="hover:bg-[#1B1B2D] p-2 cursor-pointer">
          <Link href="/" className="flex items-center gap-5">
            <Image src={chat_ic} width={30} height={30} alt="home page" />
            <p className="font-bold text-lg">Chats</p>
          </Link>
        </li>

        <li className="hover:bg-[#1B1B2D] p-2 cursor-pointer">
          <Link href="/" className="flex items-center gap-5">
            <Image src={setting_ic} width={30} height={30} alt="home page" />
            <p className="font-bold text-lg">Settings</p>
          </Link>
        </li>

        <li className="hover:bg-[#1B1B2D] p-2 cursor-pointer">
          <Link href="/" className="flex items-center gap-5">
            <Image src={author_room} width={30} height={30} alt="home page" />
            <p className="font-bold text-lg">Authors’ room</p>
          </Link>
        </li>
      </ul>

<<<<<<< HEAD
      <button className="text-white bg-blue-500 flex items-center px-13 pt-2 pb-2.5 rounded-md gap-2 text-base">
=======
      <button className="w-[95%] flex items-center justify-center bg-[#0C8CE9] py-3 rounded-lg hover:opacity-90 cursor-pointer gap-3">
>>>>>>> 3ef5cce377cfdd16ebb29bb556c62d8409f2cd78
        <Image src={add_post_ic} width={24} height={24} alt="note icon" />
        add new post
      </button>
    </aside>
  );
};

export default Sidebar;