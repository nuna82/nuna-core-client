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

const Sidebar = () => {
  return (
    <aside className="w-[293px] border-[#1B1B2D] border-r-2 h-screen  py-4">
      {/* logo  */}
      <Image
        src={Logo}
        width={88}
        height={40}
        alt="nuna logo"
        className="mb-6"
      />

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
          <Link href="/" className="flex items-center gap-2">
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
    </aside>
  );
};

export default Sidebar;
