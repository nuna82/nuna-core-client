import Image from "next/image";

// icons
import hashtagic from "@/app/icons/hashtag-ic.svg";
import plus from "@/app/icons/plus-ic.svg";
import search from "@/app/icons/search-ic.svg";
import bannerbg from "@/app/icons/banner-bg.png";
import userprph from "@/app/icons/user-pr-ph.jpg";

const page = () => {
  return (
    <section className="container">
      {/* search section */}
      <div className="flex items-center justify-between gap-4 mt-4 py-4">
        <Image
          src={hashtagic}
          width={24}
          height={24}
          alt="fur"
          className="h-full"
        />

        <label
          htmlFor="searchsth"
          className="flex bg-[#1B1B2D] w-full rounded-md px-4 h-12 gap-2"
        >
          <Image
            src={search}
            width={24}
            height={24}
            alt="fur"
            className="h-full"
          />
          <input
            className="h-full"
            type="text"
            placeholder="search something"
            name="search"
            id="searchsth"
          />
        </label>
        <button className="bg-[#0C8CE9] h-12 px-4 rounded-md">
          <Image src={plus} width={24} height={24} alt="fur" />
        </button>
      </div>

      {/* user profile */}
      <div className="w-full flex flex-col items-center">
        <div className="w-full relative flex items-center justify-center mb-24">
          <Image
            src={bannerbg}
            width={900}
            height={100}
            alt="fur"
            className="w-full h-full rounded-md"
          />
          <Image
            src={userprph}
            width={400}
            height={400}
            alt="fur"
            className="w-52 h-52 rounded-full absolute top-40  border-4 border-[#05050D]"
          />
        </div>
          <h1 className="text-3xl font-[robotobold]">Mardonbek Khamidov</h1>
      </div>
    </section>
  );
};

export default page;
