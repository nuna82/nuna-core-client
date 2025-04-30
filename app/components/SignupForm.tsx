"use client";
import Link from "next/link";
import user_profile_icon from "../icons/user_profile_icon.svg";
import emailicon from "../icons/email_icon.svg";
import { useState } from "react";
import { Slide, toast } from "react-toastify";
import Image from "next/image";

const SignupForm = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    if (userData.name === "" || userData.email === "") {
      toast.warn("Place fill the inputs !", {
        position: "top-center",
        autoClose: 300,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Slide,
      });
      return;
    }
    if (!userData.email.includes("@")) {
      toast.warn("Please enter a valid email address.", {
        position: "top-center",
        autoClose: 300,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Slide,
      });
      return;
    }
    e.preventDefault();
    setUserData({
      name: "",
      email: "",
    });
    toast.success("Link sent successfully !", {
      position: "top-center",
      autoClose: 300,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Slide,
    });
  };
  return (
    <div>
      <div className="py-5">
        <h1 className="text-[40px] leading-[100%] font-[robotobold] mb-2">
          Register in easiest way
        </h1>
        <p className="text-base text-[#8C8998] mb-8">
          we will send magic link to your email, just click it
        </p>

        <form
          action=""
          onSubmit={handleSubmit}
          method="POST"
          className="w-1/2 mb-4"
        >
          <label htmlFor="name">
            <span className="mb-1.5 text-[#8C8998]">your name</span>

            <section className="bg-[#1B1B2D] flex items-center rounded-md px-7 space-x-4 mb-5">
              <Image
                src={user_profile_icon}
                width={24}
                height={24}
                alt="user icon"
              />
              <input
                required
                autoComplete="off"
                autoCorrect="off"
                className="h-12 w-full"
                id="name"
                type="text"
                placeholder="John Doe"
                value={userData.name}
                onChange={(e) => {
                  setUserData({ ...userData, name: e.target.value });
                }}
              />
            </section>
          </label>

          <label htmlFor="name">
            <span className="mb-1.5 text-[#8C8998]">your email</span>

            <section className="bg-[#1B1B2D] flex items-center rounded-md px-7 space-x-4">
              <Image src={emailicon} width={24} height={24} alt="user icon" />
              <input
                required
                className="h-12 w-full"
                id="name"
                autoComplete="off"
                autoCorrect="off"
                type="email"
                placeholder="mail@example.com"
                value={userData.email}
                onChange={(e) => {
                  setUserData({ ...userData, email: e.target.value });
                }}
              />
            </section>
          </label>
        </form>

        <div className="flex items-center gap-2 mb-2">
          <label>
            <input type="checkbox" className="input" />
            <span className="custom-checkbox"></span>
          </label>

          <p className="text-[#8C8998] flex items-center mb-1 gap-1">
            allow all terms and cool stuff
            <Link href="/terms" className="text-blue-600 underline">
              in Nuna
            </Link>
          </p>
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          className="px-16 pt-4 pb-3.5 bg-[#0C8CE9] rounded-md"
        >
          Receive Link
        </button>
      </div>
    </div>
  );
};

export default SignupForm;
