// components and libraryies
import Image from "next/image";
import Link from "next/link";

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
  return (
    <aside className="w-[310px] border-[#1B1B2D] border-r-2 h-screen py-4 space-y-6 pl-4">
      {/* logo  */}
      <Link href='/' className="mb-5 inline-block">
        <Image src={Logo} width={88} height={40} alt="nuna logo" />
      </Link>

      <ul className="space-y-1 w-72">
        <li className="hover:bg-[#1B1B2D] rounded-md py-2 px-2">
          <Link href="/" className="flex items-center gap-2">
            <Image src={home_ic} width={24} height={24} alt="home page" />
            <p className="text-base">Home</p>
          </Link>
        </li>
        <li className="hover:bg-[#1B1B2D] rounded-md py-2 px-2">
          <Link href="/" className="flex items-center gap-2">
            <Image src={search_ic} width={24} height={24} alt="home page" />
            <p className="text-base">Search page</p>
          </Link>
        </li>
        <li className="hover:bg-[#1B1B2D] rounded-md py-2 px-2">
          <Link href="/" className="flex items-center gap-2">
            <Image src={notification} width={24} height={24} alt="home page" />
            <p className="text-base">Notifications</p>
          </Link>
        </li>
        <li className="hover:bg-[#1B1B2D] rounded-md py-2 px-2">
          <Link
            href="/user/BUYERGA_APIDAN_UERNAME_KELISHI_KERAK"
            className="flex items-center gap-2"
          >
            <Image src={profile_ic} width={24} height={24} alt="home page" />
            <p className="text-base">My profile</p>
          </Link>
        </li>
        <li className="hover:bg-[#1B1B2D] rounded-md py-2 px-2">
          <Link href="/" className="flex items-center gap-2">
            <Image src={chat_ic} width={24} height={24} alt="home page" />
            <p className="text-base">Chats</p>
          </Link>
        </li>
        <li className="hover:bg-[#1B1B2D] rounded-md py-2 px-2">
          <Link href="/" className="flex items-center gap-2">
            <Image src={setting_ic} width={24} height={24} alt="home page" />
            <p className="text-base">Settings</p>
          </Link>
        </li>
        <li className="hover:bg-[#1B1B2D] rounded-md py-2 px-2">
          <Link href="/" className="flex items-center gap-2">
            <Image src={author_room} width={24} height={24} alt="home page" />
            <p className="text-base">Authors’ room</p>
          </Link>
        </li>
      </ul>

      <button className="text-white bg-blue-500 flex items-center px-13 pt-2 pb-2.5 rounded-md gap-2 text-base">
        <Image src={add_post_ic} width={24} height={24} alt="note icon" />
        add new post
      </button>
    </aside>
  );
};

export default Sidebar;
